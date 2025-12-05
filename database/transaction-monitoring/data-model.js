module.exports = [
  {
    id: "address",
    label: "Address",
    description: "A reusable entity representing a postal address",
    extends: "blaze-entity",
    isProtected: true,
  },
  {
    id: "blaze-entity",
    label: "Blaze Entity",
    description: "Base attributes available to all entities in Blaze",
    extends: null,
    isProtected: true,
  },
  {
    id: "customer",
    label: "Customer Record",
    description: "A customer data model",
    extends: "person",
    isProtected: true,
  },
  {
    id: "person",
    label: "Person",
    description: "A reusable entity representing an individual",
    extends: "blaze-entity",
    isProtected: true,
  },
  {
    id: "role",
    label: "Role",
    description: "User role with permissions",
    extends: null,
    isProtected: true,
  },
  {
    id: "user",
    label: "User",
    description: "User account information",
    extends: "person",
    isProtected: true,
  },
];
