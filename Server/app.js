const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes.js");
/*const certificationRoutes = require("./routes/certificationRoutes.js");
const relationRoutes = require("./routes/relationRoutes.js");
const skillRoutes = require("./routes/skillRoutes.js");*/
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.json())

app.use("/api/auth", authRoutes);

/*app.use("/api/certification", certificationRoutes);

app.use("/api/relation", relationRoutes);

app.use("/api/skills", skillRoutes);*/

app.use(cookieParser());

app.listen(5000, () => console.log(`Server running on port ${5000}`));
