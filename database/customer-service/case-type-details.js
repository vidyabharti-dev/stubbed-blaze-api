// data/customer-service/case-type-details.js

module.exports = {
  "customer-complaint": {
    caseType: {
      id: "customer-complaint",
      label: "Customer Complaint",
    },
    stages: [
      {
        id: "Complaint_Registration",
        label: "Complaint Registration",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "customer-complaint-registration-start",
            dataModelReference: {models: []},
          },
          {
            id: "register-complaint",
            label: "Register Complaint Details",
            type: "manual",
            status: "pending",
            view: "customer-complaint-registration-register-complaint",
            dataModelReference: {
              models: [
                "complaint_id",
                "customer_id",
                "complaint_description",
                "date_reported",
                "priority",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "customer-complaint-registration-end",
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
            view: "customer-complaint-investigation-start",
            dataModelReference: {models: []},
          },
          {
            id: "investigate",
            label: "Investigate Complaint",
            type: "manual",
            status: "pending",
            view: "customer-complaint-investigation-investigate",
            dataModelReference: {
              models: [
                "assigned_to",
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
            view: "customer-complaint-investigation-end",
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
            view: "customer-complaint-resolution-start",
            dataModelReference: {models: []},
          },
          {
            id: "resolve",
            label: "Resolve Complaint",
            type: "manual",
            status: "pending",
            view: "customer-complaint-resolution-resolve",
            dataModelReference: {
              models: [
                "resolution_details",
                "customer_feedback",
                "case_closed_date",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "customer-complaint-resolution-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },

  "service-request": {
    caseType: {
      id: "service-request",
      label: "Service Request",
    },
    stages: [
      {
        id: "Request_Submission",
        label: "Request Submission",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "service-request-submission-start",
            dataModelReference: {models: []},
          },
          {
            id: "submit-request",
            label: "Submit Service Request",
            type: "manual",
            status: "pending",
            view: "service-request-submission-submit-request",
            dataModelReference: {
              models: [
                "request_id",
                "customer_id",
                "request_type",
                "description",
                "date_submitted",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "service-request-submission-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Request_Fulfillment",
        label: "Request Fulfillment",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "service-request-fulfillment-start",
            dataModelReference: {models: []},
          },
          {
            id: "fulfill-request",
            label: "Fulfill Service Request",
            type: "manual",
            status: "pending",
            view: "service-request-fulfillment-fulfill-request",
            dataModelReference: {
              models: [
                "assigned_team",
                "fulfillment_status",
                "completion_date",
                "notes",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "service-request-fulfillment-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },

  "account-inquiry": {
    caseType: {
      id: "account-inquiry",
      label: "Account Inquiry",
    },
    stages: [
      {
        id: "Inquiry",
        label: "Inquiry",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "account-inquiry-inquiry-start",
            dataModelReference: {models: []},
          },
          {
            id: "capture-inquiry",
            label: "Capture Inquiry Details",
            type: "manual",
            status: "pending",
            view: "account-inquiry-inquiry-capture",
            dataModelReference: {
              models: [
                "customer_id",
                "account_number",
                "inquiry_subject",
                "inquiry_details",
                "date_received",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "account-inquiry-inquiry-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Response",
        label: "Response",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "account-inquiry-response-start",
            dataModelReference: {models: []},
          },
          {
            id: "provide-response",
            label: "Provide Response",
            type: "manual",
            status: "pending",
            view: "account-inquiry-response-provide-response",
            dataModelReference: {
              models: [
                "response_text",
                "response_date",
                "handled_by",
                "status",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "account-inquiry-response-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },
};
