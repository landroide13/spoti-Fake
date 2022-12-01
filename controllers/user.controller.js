const User = require('../models/user');


exports.getUsers = async(req, res) =>{
    const users = await User.find();
    res.status(200).json({ users });
}

exports.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
}



