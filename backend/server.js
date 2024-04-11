const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workout");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect mongo
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is listening and DB connected");
    });
  })
  .catch((error) => {
    console.log(error);
  });

