const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

const allowedOrigins = [
  "https://id-preview--5668ff49-221b-4c38-9ae4-1d64dd3d1536.lovable.app",
  "https://lovable.dev",
  "https://id-preview--3c52ef72-55a2-4d1b-97a9-e192c21b3cdc.lovable.app",
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
// GET View Definition by file id
app.get("/:app/api/view/:id", (req, res) => {
  const appName = req.params.app;
  const fileId = req.params.id; // e.g. "person-details-basic" or other id

  // If request is exactly person-details-basic -> load that file
  if (fileId === "person-details-basic") {
    try {
      const viewData = require(`./database/${appName}/views/person-details-basic.json`);
      return res.json(viewData);
    } catch (err) {
      console.error("Error loading person-details-basic:", err.message);
      return res
        .status(404)
        .json({error: "person-details-basic view not found"});
    }
  }

  // For any other id -> return applicant-info.json
  try {
    const applicantView = require(`./database/${appName}/views/applicant-info.json`);
    return res.json(applicantView);
  } catch (err) {
    console.error("Error loading applicant-info:", err.message);
    return res.status(404).json({error: "applicant-info view not found"});
  }
});

app.get("/:app/api/view", (req, res) => {
  const appName = req.params.app;
  const viewsDir = path.join(__dirname, "database", appName, "views");

  fs.readdir(viewsDir, (err, files) => {
    if (err) {
      console.error(
        `Error reading views folder for app ${appName}:`,
        err.message
      );
      return res
        .status(404)
        .json({error: "Views folder not found for this app"});
    }

    // Filter only .json files
    const jsonFiles = files.filter((f) => f.endsWith(".json"));

    // Map to id/name objects (id = filename without .json, name = filename without .json)
    const viewsList = jsonFiles.map((file) => {
      const id = path.basename(file, ".json");
      return {id, name: id};
    });

    res.json(viewsList);
  });
});

function generateRandomTasks(count, name) {
  return Array.from({length: count}).map(() => ({
    caseId: "C-" + Math.floor(100 + Math.random() * 900),
    caseType: {name},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    updatedBy: "system-user",
  }));
}

// GET - Task assigned to user by ID (returns array)
app.get("/:app/api/task/user/:id", (req, res) => {
  const appName = req.params.app;
  const taskId = req.params.id;

  const response = generateRandomTasks(
    Math.floor(3 + Math.random() * 5), // random 3-7 tasks
    `${appName}-task-user`
  );

  console.log("User tasks for:", taskId, "->", response.length, "items");
  res.json(response);
});

// GET - Task in queue by ID (returns array)
app.get("/:app/api/task/queue/:id", (req, res) => {
  const appName = req.params.app;
  const queueTaskId = req.params.id;

  const response = generateRandomTasks(
    Math.floor(5 + Math.random() * 5), // random 5-10 tasks
    `${appName}-task-queue`
  );

  console.log("Queue tasks for:", queueTaskId, "->", response.length, "items");
  res.json(response);
});

// 🔥 GET - Notes for a Case (from DB file)
app.get("/:app/api/case/:caseId/note", (req, res) => {
  const appName = req.params.app;
  const caseId = req.params.caseId;

  try {
    const notes = require(`./database/${appName}/notes.js`);
    console.log(`Notes for case ${caseId} ->`, notes.length, "items");
    return res.json(notes);
  } catch (err) {
    console.error("Error loading notes.js:", err.message);
    return res.status(404).json({error: "Notes not found for this app"});
  }
});

// 🔥 GET - Documents for a Case (from DB file)
app.get("/:app/api/case/:caseId/document", (req, res) => {
  const appName = req.params.app;
  const caseId = req.params.caseId;

  try {
    const docs = require(`./database/${appName}/documents.js`);
    console.log(`Documents for case ${caseId} ->`, docs.length, "items");
    return res.json(docs);
  } catch (err) {
    console.error("Error loading documents.js:", err.message);
    return res.status(404).json({error: "Documents not found for this app"});
  }
});
app.get("/:app/api/case/:caseId/audit-trail", (req, res) => {
  const appName = req.params.app;
  const caseId = req.params.caseId;

  try {
    const auditTrail = require(`./database/${appName}/audit-trail.js`);
    console.log(
      `Audit trail for case ${caseId} ->`,
      auditTrail.length,
      "items"
    );
    return res.json(auditTrail);
  } catch (err) {
    console.error("Error loading audit-trail.js:", err.message);
    return res.status(404).json({error: "Audit trail not found for this app"});
  }
});

// GET all data models (summary list)
app.get("/:app/api/data-model", (req, res) => {
  try {
    // Require a central index file that exports summary list of all models
    const dataModelsSummary = require(`./database/data-models/index.js`);
    return res.json(dataModelsSummary);
  } catch (err) {
    console.error("Error loading data models summary:", err.message);
    return res.status(500).json({error: "Failed to load data models"});
  }
});

// GET data model by ID (full details)
app.get("/:app/api/data-model/:id", (req, res) => {
  const id = req.params.id;

  try {
    // Dynamically load the specific model file by id from data-models folder
    const model = require(`./database/data-models/${id}.js`);
    return res.json(model);
  } catch (err) {
    console.error(`Error loading data model ${id}:`, err.message);
    return res.status(404).json({error: "Data model not found"});
  }
});

app.listen(PORT, () => {
  console.log("Stubbed API running on port", PORT);
});
