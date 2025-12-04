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
app.post("/:app/api/case", (req, res) => {
  const appName = req.params.app;
  const caseTypeData = req.body["case-type"];

  if (!caseTypeData || !caseTypeData.id) {
    return res.status(400).json({error: "case-type.id is required"});
  }

  const newId = `${appName}-${Date.now()}`;
  const randomNum = Math.floor(100 + Math.random() * 900);
  const newCase = {
    "case-id": `C-${randomNum}`,
    "case-type": caseTypeData,
    id: newId,
  };

  // Save to in-memory store
  casesStore[newId] = newCase;
  console.log("Created new case:", newCase["case-id"]);
  res.status(201).json(newCase);
});

app.get("/:app/api/case/:caseId", (req, res) => {
  const appName = req.params.app;
  const caseIdParam = req.params.caseId;

  const foundCase = Object.values(casesStore).find(
    (c) => c["case-id"] === caseIdParam && c.id && c.id.startsWith(appName)
  );

  if (!foundCase) {
    return res.status(404).json({error: "Case not found"});
  }

  // Clone object to avoid mutating in-memory store
  const {id, ...caseWithoutId} = foundCase;

  res.json(caseWithoutId);
});

app.put("/:app/api/case", (req, res) => {
  const appName = req.params.app;
  const {"case-id": caseId, ...updateData} = req.body;

  if (!caseId) {
    return res.status(400).json({error: '"case-id" is required in the body'});
  }

  // Find case in the store by "case-id" and app prefix
  const foundCaseKey = Object.keys(casesStore).find(
    (key) => casesStore[key]["case-id"] === caseId && key.startsWith(appName)
  );

  if (!foundCaseKey) {
    return res.status(404).json({error: "Case not found"});
  }

  // Update case with new data, but keep "id" and "case-id"
  casesStore[foundCaseKey] = {
    ...casesStore[foundCaseKey],
    ...updateData,
  };

  return res.json({status: "success"});
});

app.listen(PORT, () => {
  console.log("Stubbed API running on port", PORT);
});
