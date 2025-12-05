module.exports = function (caseObj) {
  const dobStr = caseObj?.client?.dateOfBirth;
  if (!dobStr) return null;
  const dob = new Date(dobStr);
  if (isNaN(dob)) return null;
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const hadBirthday = (now.getMonth() > dob.getMonth()) || (now.getMonth() === dob.getMonth() && now.getDate() >= dob.getDate());
  if (!hadBirthday) age--;
  return age;  //Return Age 
};