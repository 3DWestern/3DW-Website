//const pool = require('../db.js');
//const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.ATLAS_URI);
const database = client.db(process.env.DB);

//Query the database for the credentials
//Return as a boolean
const queryDBCredentials = async (username, password) => {
    
    // Query database
    const users = database.collection('users'); // Connect to 'users' cluster
    const query = { _id: { student_id: username } } // Search for user with that ID
    const result = await users.findOne(query) // Send query to database
    
    // If no such user with that student ID exists, return false
    if (!result) return false;
    
    // Compare password (hash)
    return await bcrypt.compare(password, result.password_hash)
}

//Add the credentials to the database
const addDBCredentials = async (studentNumber, email, password, firstName, lastName) => {

    // First hash the password, then add to database
    bcrypt.hash(password, 12, (err, hash) => { 

        // Connect to 'users' cluster
        const users = database.collection('users');

        // Create object for new user, according to database schema
        const newUser = {
            _id: { student_id: studentNumber },
            email: email,
            name: {
                first: firstName,
                last: lastName
            },
            password_hash: hash,
            account_created: new Date().toISOString(),
            membership: "MEMBER" // TODO: are we going to allow non-members to sign up?
        }

        // Add new user to database
        users.insertOne(newUser)
    })
}

const generateRefreshToken = (username) => {
    return jwt.sign({ username }, 'jwtSecret', { expiresIn: '3d' }); 
}

const generateAccessToken = (username) => {
    return jwt.sign({ username }, 'jwtSecret', { expiresIn: '30m' }); //We need to define this secret as something else usually a 64 hex code or smth
}

module.exports = {queryDBCredentials, addDBCredentials, generateRefreshToken, generateAccessToken}