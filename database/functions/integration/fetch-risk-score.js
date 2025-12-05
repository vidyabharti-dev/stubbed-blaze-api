module.exports = async function (client) {
  // Example stub; replace with your own http client inside your executor
  // return await http.get(`https://risk.example.com/score?pan=${client.pan}`)
  return { score: 712, model: 'demo', ts: Date.now() };
};