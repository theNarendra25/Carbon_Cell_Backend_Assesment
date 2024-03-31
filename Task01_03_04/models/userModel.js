const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = model('User', userSchema);

async function createUser(username, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user');
    }
}

async function findUserByUsername(username) {
    try {
        const user = await User.findOne({ username });
        return user;
    } catch (error) {
        throw new Error('Error finding user');
    }
}

module.exports = { createUser, findUserByUsername };
