module.exports = function (input) {
  // expects: { client: { age: number } }
  const age = input?.client?.age;
  if (typeof age !== 'number') return { decision: 'UNKNOWN', reason: 'No age' };
  if (age < 18) return { decision: 'REJECT', reason: 'Underage' };
  if (age <= 60) return { decision: 'APPROVE', tier: 'STANDARD' };
  return { decision: 'REVIEW', reason: 'Senior policy check' };
};