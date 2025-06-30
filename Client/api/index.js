const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { MongoClient } = require("mongodb");

const app = express();

// Connect to database (temporary routes for demonstration)
const client = new MongoClient(process.env.ATLAS_URI);
const database = client.db(process.env.DB);

app.use(
  cors({
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json())

app.post("/api/save-email", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    res.send("Error: No email specified\n").status(400)
    return;
  }

  const newsletter_emails = database.collection('newsletter_emails');
  try {
    await newsletter_emails.insertOne({ "_id": email });
  } catch (error) {
    if (error.code === 11000) res.json({message: "Email already in mailing list"}).status(400);
    else res.json({message: error}).status(500);
    return;
  }

  res.json({message: "Added email to mailing list\n"}).status(200);
})

module.exports = app;