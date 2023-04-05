//Create express app setup
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks-router");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//Create server
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./public"));
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port ${port}...`));
    app.use(notFound);
    app.use(errorHandlerMiddleware);
  } catch (error) {
    console.log(error);
  }
};

start();
//Create a route
app.use("/api/v1/tasks", tasks);
