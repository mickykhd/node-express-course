const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("../starter/middleware/errorHandler");

//middleware to sending json from our application
app.use(express.json());
app.use(express.static("./public"));

//routes

app.use("/api/v1/tasks", tasks);
app.use(errorHandlerMiddleware);

app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
