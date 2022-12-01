const jwt = require('jsonwebtoken');
const User = require('../models/user');
require("dotenv").config();

exports.verifyToken = async(req, res, next) =>{
    try {
        const token = req.headers['x-access-token'];
        if(!token) return res.status(404).json({message: "Token not valid"});

        const coded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = coded.id;

        const user = await User.findById(req.userId, {password: 0});
        if(!user) return res.status(404).json({message: "User not valid"});

        console.log(coded);
        next();
        
    } catch (error) {
        return res.status(500).json({ message: "UnAuthorize "})
    }
}


