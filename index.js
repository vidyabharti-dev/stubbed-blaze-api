const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const allowedOrigins = [
  "https://id-preview--5668ff49-221b-4c38-9ae4-1d64dd3d1536.lovable.app",
  "https://lovable.dev",
  // you can add other allowed origins here if needed
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin like mobile apps or curl requests
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

const PORT = process.env.PORT || 3000;

// Allowed apps
const validApps = [
  "know-your-customer",
  "transaction-monitoring",
  "customer-service",
];

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

app.listen(PORT, () => {
  console.log("Stubbed API running on port", PORT);
});
