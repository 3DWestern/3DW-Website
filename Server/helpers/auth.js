//const pool = require('../db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.ATLAS_URI);
const database = client.db(process.env.DB);

const NUM_OF_SALT_ROUNDS = 12; // more salting ==> more secure

//Query the database for the credentials
//Return as a boolean
const queryDBCredentials = async (username, password, collection) => {
    
    // Query database
    const users = database.collection(collection); // Connect to 'users' cluster
    const query = { _id: { student_id: username } } // Search for user with that ID
    const result = await users.findOne(query) // Send query to database
    
    // If no such user with that student ID exists, return false
    if (!result) return false;
    
    // Compare password (hash)
    return await bcrypt.compare(password, result.password_hash)
}

// Add the credentials to the database
// Returns true if user successfully added, returns false if user with student id already exists
// Throws error if anything else happens
const addDBCredentials = async (studentNumber, email, password, firstName, lastName, collection) => {

    // Hash the password
    let hash = await bcrypt.hash(password, NUM_OF_SALT_ROUNDS)
    
    // Connect to cluster and prepare information
    const users = database.collection(collection);
    const newUser = {
        _id: { student_id: studentNumber },
        email: email,
        name: { first: firstName, last: lastName},
        password_hash: hash,
        account_created: new Date().toISOString(),
        membership: "MEMBER" // TODO: are we going to allow non-members to sign up?
    }
    
    // Add to database
    try {
        await users.insertOne(newUser)
        return true;
    } catch (error) {
        if (error.code === 11000) return false // this means user already exists
        else throw new Error(error);
    }
}

const generateRefreshToken = (username) => {
    return jwt.sign({ username }, 'jwtSecret', { expiresIn: '3d' }); 
}

const generateAccessToken = (username) => {
    return jwt.sign({ username }, 'jwtSecret', { expiresIn: '30m' }); //We need to define this secret as something else usually a 64 hex code or smth
}

module.exports = {queryDBCredentials, addDBCredentials, generateRefreshToken, generateAccessToken}