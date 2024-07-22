const User = require("../models/User");
const jwt = require("jsonwebtoken");

// register a new user
const register = async (req, res) => {
  const { username, mail, password } = req.body;
  try {
    const newUser = new User({ username, mail, password });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//login user
const login = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const user = await User.findOne({ mail });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid mail or password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { register, login };
