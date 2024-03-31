const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

async function register(req, res) {
    try {
        const { username, password } = req.body;
        // Check if user already exists
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Store user data
        users.push({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        // Find user
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Check password
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

function logout(req, res) {
    res.clearCookie('jwtToken');
    res.json({ message: 'Logged out successfully' });
}

module.exports = { register, login, logout };
