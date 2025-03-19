//const pool = require('../db.js');
//const jwt = require('jsonwebtoken');

//Query the database for the credentials
//Return as a boolean
const queryDBCredentials = async (username, password) => {
    try{

        console.log('Queried the database');
        return true;
    }
    catch (error) {
        console.log('Error querying the database');
        return false;
    }
}

//Add the credentials to the database
//Remember to hash the password
const addDBCredentials = async (username, password) => {
    try{
        //Something added here to add the credentials to the database
        console.log('Added to the database');
    }
    catch (error) {
        console.log('Error adding to the database');
    }
}

const generateRefreshToken = (username) => {
    return jwt.sign({ username }, 'jwtSecret', { expiresIn: '3d' }); 
}

const generateAccessToken = (username) => {
    return jwt.sign({ username }, 'jwtSecret', { expiresIn: '30m' }); //We need to define this secret as something else usually a 64 hex code or smth
}

module.exports = {queryDBCredentials, addDBCredentials, generateRefreshToken, generateAccessToken}