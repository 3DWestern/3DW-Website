//const { Pool } = require('../db.js');
const { queryDBCredentials, addDBCredentials, generateRefreshToken, generateAccessToken } = require('../helpers/auth.js');
//const jwt = require('jsonwebtoken');

const test = async(req, res) => {
    const{inputInfo} = req.body;
    try{
        console.log(inputInfo);
        res.status(200).json({ message: "Hello World!" });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error: ${error.message}`})
    }
}

const getTest = async(req, res) => {
    try{
        res.status(200).json({ message: "Hello World!" });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error: ${error.message}`})
    }
}

const register = async(req, res) => {
    const { username, password } = req.body;
    let inDB = await queryDBCredentials(username, password)
    
    if (!inDB) {
        await addDBCredentials(username, password);
        res.send('Your data was appended');
    }
    else{
        return res.status(400).send('Already in database. Provide different credentials'); 
    }
}

const login = async(req, res) => {
    const { username, password } = req.body;
    
    let inDB = await queryDBCredentials(username, password);
    if (inDB) {
        const accessToken = generateAccessToken(username);
        const refreshToken = generateRefreshToken(username);

        res.cookie('refreshToken', refreshToken, { //The name of the token should be sent under 'refreshToken' in the frontend
            httpOnly: true,
            sameSite: 'None', 
            secure: true, 
            maxAge: 1000 * 60 * 60 * 24 * 3 // 1000 ms x 60 s * 60 m * 24 hr * 3d
        });
        res.json({ accessToken });
    } else {
        res.status(401).send('Not in Database');
    }
}

const returnAccess = async (req, res) => {
    console.log("Received");
    try {
        const refreshToken = req.cookies.refreshToken; // Extract token from HttpOnly cookie
        console.log("Cookie received:", refreshToken);

        if (!refreshToken) {
            console.log("No refresh token provided");
            return res.status(401).json({ message: 'No refresh token provided' });
        }

        jwt.verify(refreshToken, 'jwtSecret', (err, user) => { // Replace 'jwtSecret' with your actual secret
            if (err) {
                console.error("Invalid Refresh Token:", err);
                return res.status(403).send("Invalid Refresh Token");
            }

            console.log("User verified:", user);

            const newAccessToken = generateAccessToken(user.username);
            console.log("Generated new access token:", newAccessToken);

            res.json({ accessToken: newAccessToken }); // Sending back the new access token if the refresh token is valid
        });
    } catch (error) {
        console.error('Error during token processing:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = returnAccess;

module.exports = returnAccess;


const verifyJWT = (req, res) => { //This is for authorization 
    const authHeader = req.headers['authorization'];    
    const token = authHeader && authHeader.split(' ')[1]; // Extract token part from "Bearer <token>" - Bearer should be apart of the content sent with the access token (An OAUTH standard I believe)
  
    if (!token) {
        return res.status(401).send("Token is required");
    }
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
        if (err) {
            return res.status(403).json({ auth: false, message: "Authorization failed" });
        }
        return res.status(200).send("Token Validated")
    });
};

module.exports = {
    test,
    getTest,
    register,
    login, 
    returnAccess, 
    verifyJWT
}

