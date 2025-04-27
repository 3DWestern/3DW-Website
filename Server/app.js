const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes.js");
const cookieParser = require("cookie-parser");
const { MongoClient } = require("mongodb");

const app = express();

// Connect to database
const client = new MongoClient(process.env.ATLAS_URI);
const database = client.db(process.env.DB);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/hello", (req, res) => {
  res.send({message: "Saluton, la mondo!"})
})

/*
  Temporary routes to test database connection
*/
app.get("/users", async (req, res) => {
  const users = database.collection('users');

  const query = {}; // to get all users
  const results = await users.find(query).toArray(); // search database

  res.send(results).status(200);
})

app.use(cookieParser());

app.use(bodyParser.json())

app.use("/api/auth", authRoutes);



app.use(cookieParser());

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
