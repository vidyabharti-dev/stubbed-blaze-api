// Data Model: blaze-entity
module.exports = {
  id: "blaze-entity",
  label: "Blaze Entity",
  description: "Base attributes available to all entities in Blaze",
  isEditable: false,
  attributes: [
    {
      id: "id",
      type: "string",
      label: "ID",
      required: true,
      unique: true,
      indexed: true,
    },
    {
      id: "description",
      type: "string",
      label: "Description",
      defaultValue: "",
    },
    {
      id: "startDate",
      type: "date",
      label: "Start Date",
      required: true,
    },
    {
      id: "endDate",
      type: "date",
      label: "End Date",
    },
    {
      id: "createdBy",
      type: "string",
      label: "Created By",
      accessControl: {
        read: ["admin"],
        write: ["admin"],
      },
    },
    {
      id: "createdAt",
      type: "datetime",
      label: "Created At",
    },
    {
      id: "status",
      type: "string",
      label: "Status",
      defaultValue: "draft",
      allowedValues: ["draft", "active", "inactive", "archived"],
    },
    {
      id: "version",
      type: "number",
      label: "Version",
      defaultValue: 1,
    },
    {
      id: "createdAge",
      type: "computed",
      label: "Age (days)",
      dependencies: ["createdAt"],
    },
  ],
  isProtected: true,
};
