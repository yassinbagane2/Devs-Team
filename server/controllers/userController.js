const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler( async (req, res) => {
    const { fullname, email, password } = req.body;

    if(!fullname || !email || !password){
        res.status(400);
        throw new Error('Please add all fields!');
    }

    // Check if user exists 
    const userExists = await User.findOne({ email });

    if (userExists){
        res.status(400);
        throw new Error('User already exists!')
    }

    // Hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User 
    const user = await User.create({
        fullname,
        email,
        password: hashedPassword
    });

    console.log(process.env.JWT_SECRET)
    if (user){
        res.status(200).json({
            _id: user.id,
            fullname: user.fullname,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400);
        throw new Error('Invalid User data!');
    }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email 
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            fullname: user.fullname,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400);
        throw new Error('Invalid credentials!');
    }
});


// Generate JWT 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = { registerUser, loginUser };