const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  const user = new User({ username, email, password, role });
  await user.save();

  const token = generateToken(user);
  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
};
