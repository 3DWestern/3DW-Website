const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.ATLAS_URI);
const database = client.db(process.env.DB);
const newsletter_emails = database.collection('newsletter_emails');

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res.status(400).send("Error: Invalid email");
  }

  try {
    await client.connect();
    await newsletter_emails.insertOne({ _id: email });
    return res.status(200).json({ message: "Added email to mailing list" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already in mailing list" });
    }
    return res.status(500).json({ message: error.message || error });
  }
};
