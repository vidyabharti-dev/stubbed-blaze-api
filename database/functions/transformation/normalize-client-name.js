module.exports = function (caseObj) {
  // Immutably normalize the client's name and add initials
  const client = caseObj?.client || {};
  const first = (client.firstName || "").trim();
  const last = (client.lastName || "").trim();
  const fullName = [first, last].filter(Boolean).join(" ");
  const initials =
    (first[0] || "").toUpperCase() + (last[0] || "").toUpperCase();
  return {
    ...caseObj,
    client: {
      ...client,
      firstName: first.charAt(0).toUpperCase() + first.slice(1).toLowerCase(),
      lastName: last.charAt(0).toUpperCase() + last.slice(1).toLowerCase(),
      fullName,
      initials,
    },
  };
};
