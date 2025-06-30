const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");
// const authRoutes = require("./routes/authRoutes.js");
// const accountRoutes = require("./routes/accountRoutes.js");
// const adminRoutes = require("./routes/adminRoutes.js");
const cookieParser = require("cookie-parser");
const { MongoClient } = require("mongodb");

const app = express();

// Connect to database (temporary routes for demonstration)
const client = new MongoClient(process.env.ATLAS_URI);
const database = client.db(process.env.DB);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.get("/hello", (req, res) => {
//   res.send({message: "Saluton, la mondo!"})
// })

// /*
//   Temporary routes to test database connection
// */
// app.get("/users", async (req, res) => {
//   const users = database.collection('users');

//   const query = {}; // to get all users
//   const results = await users.find(query).toArray(); // search database

//   res.send(results)
// })

// app.get("/jobs", async (req, res) => {
//   const printJobs = database.collection('print_jobs');
//   const results = await printJobs.find({}).toArray();
//   res.send(results)
// })

// app.get("/cost", async (req, res) => {
//   const printJobs = database.collection('print_jobs');
//   const results = await printJobs.aggregate([{$group: {_id: null, totalCost: {$sum: "$purchase_info.cost"}}}]).toArray()
//   res.send(results);
// })

app.use(cookieParser());
app.use(bodyParser.json())
app.use(mongoSanitize({
  replaceWith: '_',
}));

//app.use("/api/auth", authRoutes);
// app.use("/api/account", accountRoutes);

// app.use("/api/admin", adminRoutes);

app.post("/save-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
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

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
