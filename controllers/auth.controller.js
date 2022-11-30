require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.signup = async(req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password: await User.hashPassword(password) });
    const saved = await newUser.save();
    console.log(saved);
    
    const token =  jwt.sign({ id: saved._id }, process.env.SECRET_KEY, {expiresIn: 86400});
    res.status(200).json({token});
}


exports.signin = async (req, res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.status(404).json({ message: "User wrong." });

    const match = await User.comparePassword(password, user.password);

    if(!match) return res.status(404).json({token: null, message: "Password wrong."})

    const token =  jwt.sign({ id: user._id }, process.env.SECRET_KEY, {expiresIn: 86400});
    res.status(200).json({token});
}
