// data/transaction-monitoring/case-type-details.js

module.exports = {
  "fraud-detection": {
    caseType: {
      id: "fraud-detection",
      label: "Fraud Detection",
    },
    stages: [
      {
        id: "Alert_Review",
        label: "Alert Review",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fraud-detection-alert-review-start",
            dataModelReference: {models: []},
          },
          {
            id: "review-alert",
            label: "Review Alert Details",
            type: "manual",
            status: "pending",
            view: "fraud-detection-alert-review-review-alert",
            dataModelReference: {
              models: [
                "alert_id",
                "transaction_id",
                "alert_type",
                "risk_score",
                "date_alerted",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fraud-detection-alert-review-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Investigation",
        label: "Investigation",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fraud-detection-investigation-start",
            dataModelReference: {models: []},
          },
          {
            id: "investigate",
            label: "Conduct Investigation",
            type: "manual",
            status: "pending",
            view: "fraud-detection-investigation-investigate",
            dataModelReference: {
              models: [
                "assigned_analyst",
                "investigation_notes",
                "investigation_status",
                "resolution_date",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fraud-detection-investigation-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Resolution",
        label: "Resolution",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fraud-detection-resolution-start",
            dataModelReference: {models: []},
          },
          {
            id: "resolve",
            label: "Resolve Case",
            type: "manual",
            status: "pending",
            view: "fraud-detection-resolution-resolve",
            dataModelReference: {
              models: [
                "resolution_summary",
                "case_closure_date",
                "follow_up_actions",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fraud-detection-resolution-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },

  "transaction-review": {
    caseType: {
      id: "transaction-review",
      label: "Transaction Review",
    },
    stages: [
      {
        id: "Transaction_Analysis",
        label: "Transaction Analysis",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "transaction-review-analysis-start",
            dataModelReference: {models: []},
          },
          {
            id: "analyze-transaction",
            label: "Analyze Transaction Details",
            type: "manual",
            status: "pending",
            view: "transaction-review-analysis-analyze-transaction",
            dataModelReference: {
              models: [
                "transaction_id",
                "account_id",
                "amount",
                "transaction_date",
                "transaction_type",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "transaction-review-analysis-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Review_Outcome",
        label: "Review Outcome",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "transaction-review-outcome-start",
            dataModelReference: {models: []},
          },
          {
            id: "document-outcome",
            label: "Document Outcome",
            type: "manual",
            status: "pending",
            view: "transaction-review-outcome-document-outcome",
            dataModelReference: {
              models: [
                "reviewer_id",
                "review_notes",
                "review_status",
                "date_completed",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "transaction-review-outcome-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },

  "account-monitoring": {
    caseType: {
      id: "account-monitoring",
      label: "Account Monitoring",
    },
    stages: [
      {
        id: "Monitoring_Alerts",
        label: "Monitoring Alerts",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "account-monitoring-alerts-start",
            dataModelReference: {models: []},
          },
          {
            id: "alert-review",
            label: "Review Alerts",
            type: "manual",
            status: "pending",
            view: "account-monitoring-alerts-review",
            dataModelReference: {
              models: [
                "alert_id",
                "account_id",
                "alert_type",
                "alert_date",
                "severity",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "account-monitoring-alerts-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Follow_Up",
        label: "Follow Up",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "account-monitoring-followup-start",
            dataModelReference: {models: []},
          },
          {
            id: "follow-up-action",
            label: "Take Follow-up Actions",
            type: "manual",
            status: "pending",
            view: "account-monitoring-followup-action",
            dataModelReference: {
              models: [
                "follow_up_notes",
                "action_taken",
                "action_date",
                "assigned_to",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "account-monitoring-followup-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },
};
