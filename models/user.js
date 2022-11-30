const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})


userSchema.statics.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, cadidatePassword) => {
    const isValid = await bcrypt.compare(password, cadidatePassword);
    return isValid;
}


const User = mongoose.model('User', userSchema);

module.exports = User;
