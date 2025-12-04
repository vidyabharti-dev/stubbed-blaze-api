const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

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
app.get("/:app/api/case/:id", (req, res) => {
  const appName = req.params.app;
  const id = req.params.id;

  const details = require(`./database/${appName}/case-type-details.js`);

  if (!details[id]) {
    return res.status(404).json({error: "Case type details not found"});
  }

  res.json(details[id]);
});

app.listen(PORT, () => {
  console.log("Stubbed API running on port", PORT);
});
