const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");
const markRouter = require("./routes/mark-router");
const specRouter = require("./routes/spec-router");
const loginRouter = require("./routes/login-router");
const registerRouter = require("./routes/register-router");

dotenv.config();

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", markRouter);
app.use("/api", specRouter);
app.use("/api/users", registerRouter);
app.use("/api/auth", loginRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
