const express = require("express");
const fetch = require("node-fetch"); // install with npm i node-fetch@2
const router = express.Router();

router.get("/:app/api/dashboard", async (req, res) => {
  const {app} = req.params;

  try {
    // Call your internal function API
    const functionRes = await fetch(
      `http://localhost:3000/${app}/api/function/calculation/averageResolutionTimeReport/execute`
    );
    if (!functionRes.ok) {
      throw new Error("Failed to fetch averageResolutionTimeReport");
    }
    const functionData = await functionRes.json();

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
          data: functionData.result.data, // <-- actual data here
        },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Failed to load dashboard data"});
  }
});

module.exports = router;
