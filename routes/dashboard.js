const express = require("express");
const router = express.Router();

router.get("/:app/api/dashboard", (req, res) => {
  res.json({
    layout: {
      type: "grid",
      columns: 3,
    },
    widgets: [
      {
        type: "chart",
        title: "Open Cases by Status",
        chartType: "bar",
        dataSourceFunction: "openCasesByStatus",
      },
      {
        type: "report",
        title: "Avg. Resolution Time",
        dataSourceFunction: "averageResolutionTimeReport",
      },
    ],
  });
});

module.exports = router;
