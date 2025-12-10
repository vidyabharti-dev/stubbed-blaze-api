module.exports = {
  "bespoke-commission": {
    caseType: {
      id: "bespoke-commission",
      label: "Bespoke Commission",
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
            view: "bespoke-commission-inquiry-start",
            dataModelReference: {models: []},
          },
          {
            id: "inquiry-capture",
            label: "Inquiry Capture",
            type: "manual",
            status: "pending",
            view: "bespoke-commission-inquiry-inquiry-capture",
            dataModelReference: {
              models: [
                "client_id",
                "client_name",
                "contact_email",
                "phone",
                "order_type",
                "order_date",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "bespoke-commission-inquiry-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Measurement_&_Design",
        label: "Measurement & Design",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "bespoke-commission-measurement-design-start",
            dataModelReference: {models: []},
          },
          {
            id: "measure-design",
            label: "Measurements & Design Approval",
            type: "manual",
            status: "pending",
            view: "bespoke-commission-measurement-design-measurements-design-approval",
            dataModelReference: {
              models: [
                "measurements",
                "silhouette",
                "fabric",
                "embroidery_details",
                "designer_notes",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "bespoke-commission-measurement-design-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Agreement_&_Pricing",
        label: "Agreement & Pricing",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "bespoke-commission-agreement-pricing-start",
            dataModelReference: {models: []},
          },
          {
            id: "agreement-signoff",
            label: "Agreement & Pricing",
            type: "manual",
            status: "pending",
            view: "bespoke-commission-agreement-pricing-agreement-pricing",
            dataModelReference: {
              models: [
                "order_id",
                "total_value",
                "quantity",
                "status",
                "production_cost",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "bespoke-commission-agreement-pricing-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Production",
        label: "Production",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "bespoke-commission-production-start",
            dataModelReference: {models: []},
          },
          {
            id: "bespoke-production",
            label: "Production & Quality Control",
            type: "manual",
            status: "pending",
            view: "bespoke-commission-production-production-quality-control",
            dataModelReference: {
              models: [
                "production_id",
                "factory",
                "quality_checks",
                "completion_date",
                "lead_time_days",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "bespoke-commission-production-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Delivery",
        label: "Delivery",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "bespoke-commission-delivery-start",
            dataModelReference: {models: []},
          },
          {
            id: "delivery-final",
            label: "Final Delivery & Aftercare",
            type: "manual",
            status: "pending",
            view: "bespoke-commission-delivery-final-delivery-aftercare",
            dataModelReference: {
              models: [
                "delivery_date",
                "status",
                "commission_history",
                "notes",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "bespoke-commission-delivery-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },

  "fashion-show-production": {
    caseType: {
      id: "fashion-show-production",
      label: "Fashion Show Production",
    },
    stages: [
      {
        id: "Concept_&_Casting",
        label: "Concept & Casting",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fashion-show-production-concept-casting-start",
            dataModelReference: {models: []},
          },
          {
            id: "show-concept",
            label: "Creative Concept & Casting",
            type: "manual",
            status: "pending",
            view: "fashion-show-production-concept-casting-creative-concept-casting",
            dataModelReference: {
              models: [
                "show_id",
                "theme",
                "creative_director",
                "budget",
                "notes",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fashion-show-production-concept-casting-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Rehearsal_&_Fittings",
        label: "Rehearsal & Fittings",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fashion-show-production-rehearsal-fittings-start",
            dataModelReference: {models: []},
          },
          {
            id: "show-fittings",
            label: "Fittings & Technical Rehearsal",
            type: "manual",
            status: "pending",
            view: "fashion-show-production-rehearsal-fittings-fittings-technical-rehearsal",
            dataModelReference: {
              models: [
                "product_id",
                "measurements",
                "production_id",
                "quality_checks",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fashion-show-production-rehearsal-fittings-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Runway_Execution",
        label: "Runway Execution",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fashion-show-production-runway-execution-start",
            dataModelReference: {models: []},
          },
          {
            id: "show-execute",
            label: "Event Execution",
            type: "manual",
            status: "pending",
            view: "fashion-show-production-runway-execution-event-execution",
            dataModelReference: {
              models: ["venue", "date", "production_id", "status", "notes"],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fashion-show-production-runway-execution-end",
            dataModelReference: {models: []},
          },
        ],
      },
      {
        id: "Post-Show_Archiving",
        label: "Post-Show Archiving",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "fashion-show-production-post-show-archiving-start",
            dataModelReference: {models: []},
          },
          {
            id: "show-archive",
            label: "Archive & Follow-up Orders",
            type: "manual",
            status: "pending",
            view: "fashion-show-production-post-show-archiving-archive-follow-up-orders",
            dataModelReference: {
              models: [
                "show_id",
                "order_id",
                "total_value",
                "commission_history",
                "notes",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "fashion-show-production-post-show-archiving-end",
            dataModelReference: {models: []},
          },
        ],
      },
    ],
  },

  "product-development": {
    caseType: {
      id: "product-development",
      label: "Product Development",
    },
    stages: [
      {
        id: "Concept",
        label: "Concept",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "product-development-concept-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "concept-brief",
            label: "Concept Brief",
            type: "manual",
            status: "pending",
            view: "product-development-concept-concept-brief",
            dataModelReference: {
              models: [
                "product_id",
                "name",
                "silhouette",
                "designer_notes",
                "launch_date",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "product-development-concept-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Design",
        label: "Design",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "product-development-design-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "design-spec",
            label: "Design Specification",
            type: "manual",
            status: "pending",
            view: "product-development-design-design-specification",
            dataModelReference: {
              models: [
                "fabric",
                "embroidery_details",
                "target_price",
                "designer_notes",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "product-development-design-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Sampling",
        label: "Sampling",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "product-development-sampling-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "sample-creation",
            label: "Sample Creation & Review",
            type: "manual",
            status: "pending",
            view: "product-development-sampling-sample-creation-review",
            dataModelReference: {
              models: [
                "production_id",
                "lead_time_days",
                "quality_checks",
                "completion_date",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "product-development-sampling-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Production_Handover",
        label: "Production Handover",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "product-development-production-handover-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "produce-handover",
            label: "Production Handover",
            type: "manual",
            status: "pending",
            view: "product-development-production-handover-production-handover",
            dataModelReference: {
              models: [
                "factory",
                "production_cost",
                "production_id",
                "lead_time_days",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "product-development-production-handover-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Launch",
        label: "Launch",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "product-development-launch-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "market-launch",
            label: "Launch & Commercialization",
            type: "manual",
            status: "pending",
            view: "product-development-launch-launch-commercialization",
            dataModelReference: {
              models: ["product_id", "launch_date", "target_price"],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "product-development-launch-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
    ],
  },

  "retail-customer-order": {
    caseType: {
      id: "retail-customer-order",
      label: "Retail Customer Order",
    },
    stages: [
      {
        id: "Purchase",
        label: "Purchase",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "retail-customer-order-purchase-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "retail-purchase",
            label: "Order Capture",
            type: "manual",
            status: "pending",
            view: "retail-customer-order-purchase-order-capture",
            dataModelReference: {
              models: [
                "order_id",
                "client_id",
                "client_name",
                "contact_email",
                "order_date",
                "order_type",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "retail-customer-order-purchase-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Fulfillment",
        label: "Fulfillment",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "retail-customer-order-fulfillment-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "retail-fulfill",
            label: "Pick, Pack & Prepare",
            type: "manual",
            status: "pending",
            view: "retail-customer-order-fulfillment-pick-pack-prepare",
            dataModelReference: {
              models: [
                "production_id",
                "factory",
                "quantity",
                "production_cost",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "retail-customer-order-fulfillment-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Delivery",
        label: "Delivery",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "retail-customer-order-delivery-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "retail-delivery",
            label: "Dispatch & Delivery",
            type: "manual",
            status: "pending",
            view: "retail-customer-order-delivery-dispatch-delivery",
            dataModelReference: {
              models: ["delivery_date", "status", "address", "order_id"],
            },
          },
          {
            id: "delivery-decision",
            label: "Delivery Status Check",
            type: "decision",
            function: "route-by-delivery-status",
            connectors: {
              trueConnector: {
                destinationStepId: "finalize-delivery",
              },
              falseConnector: {
                destinationStepId: "retail-delivery",
              },
            },
          },
          {
            id: "finalize-delivery",
            label: "Finalize Delivery",
            type: "manual",
            status: "pending",
            view: "retail-customer-order-delivery-finalize",
            dataModelReference: {
              models: [
                "confirmation_notes",
                "customer_acknowledgement",
                "final_status",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "retail-customer-order-delivery-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Aftercare",
        label: "Aftercare",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "retail-customer-order-aftercare-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "retail-aftercare",
            label: "Aftercare & Alterations",
            type: "manual",
            status: "pending",
            view: "retail-customer-order-aftercare-aftercare-alterations",
            dataModelReference: {
              models: ["commission_history", "measurements", "status", "notes"],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "retail-customer-order-aftercare-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
    ],
  },

  "wholesale-order": {
    caseType: {
      id: "wholesale-order",
      label: "Wholesale Order",
    },
    stages: [
      {
        id: "Order_Received",
        label: "Order Received",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "wholesale-order-order-received-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "wholesale-receipt",
            label: "Order Receipt & Validation",
            type: "manual",
            status: "pending",
            view: "wholesale-order-order-received-order-receipt-validation",
            dataModelReference: {
              models: [
                "order_id",
                "order_type",
                "quantity",
                "total_value",
                "order_date",
                "status",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "wholesale-order-order-received-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Sampling_Approval",
        label: "Sampling Approval",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "wholesale-order-sampling-approval-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "sample-approval",
            label: "Sample Approval",
            type: "manual",
            status: "pending",
            view: "wholesale-order-sampling-approval-sample-approval",
            dataModelReference: {
              models: [
                "product_id",
                "fabric",
                "embroidery_details",
                "production_id",
                "quality_checks",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "wholesale-order-sampling-approval-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Manufacturing",
        label: "Manufacturing",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "wholesale-order-manufacturing-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "wholesale-production",
            label: "Manufacturing Run",
            type: "manual",
            status: "pending",
            view: "wholesale-order-manufacturing-manufacturing-run",
            dataModelReference: {
              models: [
                "factory",
                "lead_time_days",
                "production_cost",
                "production_id",
              ],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "wholesale-order-manufacturing-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Quality_Check",
        label: "Quality Check",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "wholesale-order-quality-check-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "wholesale-qc",
            label: "Quality Control & Sign-off",
            type: "manual",
            status: "pending",
            view: "wholesale-order-quality-check-quality-control-sign-off",
            dataModelReference: {
              models: ["quality_checks", "completion_date", "status"],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "wholesale-order-quality-check-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
      {
        id: "Shipping_&_Invoice",
        label: "Shipping & Invoice",
        steps: [
          {
            id: "start",
            label: "Start",
            type: "start",
            status: "pending",
            view: "wholesale-order-shipping-invoice-start",
            dataModelReference: {
              models: [],
            },
          },
          {
            id: "wholesale-ship",
            label: "Shipping, Billing & Close",
            type: "manual",
            status: "pending",
            view: "wholesale-order-shipping-invoice-shipping-billing-close",
            dataModelReference: {
              models: ["delivery_date", "total_value", "order_id", "status"],
            },
          },
          {
            id: "end",
            label: "End",
            type: "end",
            status: "pending",
            view: "wholesale-order-shipping-invoice-end",
            dataModelReference: {
              models: [],
            },
          },
        ],
      },
    ],
  },
};
