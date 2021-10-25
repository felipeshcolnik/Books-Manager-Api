const service = require('../service/userService');

const register = async (req, res) => {
  const { adminPassword, newUser, email, password } = req.body;
  const result = await service.register(adminPassword, newUser, email, password);
  return result;
}