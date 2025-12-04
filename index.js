const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const allowedOrigins = [
  "https://id-preview--5668ff49-221b-4c38-9ae4-1d64dd3d1536.lovable.app",
  "https://lovable.dev",
  // you can add other allowed origins here if needed
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin like mobile apps or curl requests
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json()); // to parse JSON body

const PORT = process.env.PORT || 3000;
const casesStore = {};

// Allowed apps
const validApps = [
  "know-your-customer",
  "transaction-monitoring",
  "customer-service",
];

// GET all applications
app.get("/api/application", (req, res) => {
  const apps = require("./database/applications.js");
  res.json(apps);
});

// Middleware: validate app name
app.use("/:app/*rest", (req, res, next) => {
  const appName = req.params.app;

  if (!validApps.includes(appName)) {
    return res.status(404).json({error: "Invalid app"});
  }

  next();
});

// 🔥 GET all case types
app.get("/:app/api/case-type", (req, res) => {
  const appName = req.params.app;

  const caseTypes = require(`./database/${appName}/case-types.js`);
  res.json(caseTypes);
});

// 🔥 GET details of a case type
app.get("/:app/api/case-type/:id", (req, res) => {
  const appName = req.params.app;
  const id = req.params.id;

  const details = require(`./database/${appName}/case-type-details.js`);

  if (!details[id]) {
    return res.status(404).json({error: "Case type details not found"});
  }

  res.json(details[id]);
});

// 🔥 Create a new Case

// POST - Create a new case
app.post("/:app/api/case", (req, res) => {
  const appName = req.params.app;
  const caseTypeData = req.body.caseType;

  if (!caseTypeData || !caseTypeData.id) {
    return res.status(400).json({error: "caseType.id is required"});
  }

  const newId = `${appName}-${Date.now()}`;
  const randomNum = Math.floor(100 + Math.random() * 900);
  const newCase = {
    caseId: `C-${randomNum}`,
    caseType: caseTypeData,
    key: newId, // unique internal key
  };

  // Save to in-memory store
  casesStore[newId] = newCase;
  console.log("Created new case:", newCase.caseId);
  res.status(201).json(newCase);
});

// GET - Get a case by caseId
app.get("/:app/api/case/:caseId", (req, res) => {
  const appName = req.params.app;
  const caseIdParam = req.params.caseId;

  // Find case by caseId and app prefix
  const foundCase = Object.values(casesStore).find(
    (c) => c.caseId === caseIdParam && c.key && c.key.startsWith(appName)
  );

  if (!foundCase) {
    return res.status(404).json({error: "Case not found"});
  }

  // Exclude internal key from response
  const {key, ...caseWithoutKey} = foundCase;
  res.json(caseWithoutKey);
});

// PUT - Update a case by caseId
app.put("/:app/api/case", (req, res) => {
  const appName = req.params.app;
  const {caseId, ...updateData} = req.body;

  if (!caseId) {
    return res.status(400).json({error: '"caseId" is required in the body'});
  }

  // Find the internal key for the case by caseId and app prefix
  const foundCaseKey = Object.keys(casesStore).find(
    (key) => casesStore[key].caseId === caseId && key.startsWith(appName)
  );

  if (!foundCaseKey) {
    return res.status(404).json({error: "Case not found"});
  }

  // Update case with new data but keep existing caseId and key
  casesStore[foundCaseKey] = {
    ...casesStore[foundCaseKey],
    ...updateData,
    caseId, // ensure caseId stays the same
    key: foundCaseKey, // ensure key stays the same
  };

  res.json({status: "success"});
});

// 🔥 GET Task Queue
app.get("/:app/api/task-queue", (req, res) => {
  const appName = req.params.app;

  try {
    const taskQueues = require(`./database/${appName}/task-queues.js`);
    res.json(taskQueues);
  } catch (err) {
    return res
      .status(404)
      .json({error: "Task queue data not found for this app"});
  }
});

// GET View Definition by file id
app.get("/:app/api/view/:id", (req, res) => {
  const appName = req.params.app;
  const fileId = req.params.id; // includes .json extension

  try {
    const viewData = require(`./database/${appName}/views/${fileId}`);
    res.json(viewData);
  } catch (err) {
    return res.status(404).json({error: "View file not found"});
  }
});

app.listen(PORT, () => {
  console.log("Stubbed API running on port", PORT);
});
