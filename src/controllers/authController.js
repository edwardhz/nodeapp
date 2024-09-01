const jwt = require('jsonwebtoken');
const User = require('../models/User');
//funcion para el registro
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
};
// function para el login
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  res.cookie('token', token, {
    httpOnly: true,
    secure: true, // cookie segura
    maxAge: 3600000, // 1 hora
    sameSite: 'Strict'
  });

  res.json({ message: 'Login successful' });
};
// funcion para el logout
const logout = (req, res) => {
  res.clearCookie('token'); // Elimina la cookie del token
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { register, login, logout };
