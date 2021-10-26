const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const usersRouter = require("./routes/users");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(express.static('client/build'))
app.use("/api/users", usersRouter);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    status: status === 500 ? "Fail" : "Error",
    code: status,
    message: err.message,
  });
});

module.exports = app;
