const express = require("express");
const app = express();
require("dotenv").config();
const workoutRoutes = require("./routes/workout");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is listening");
});
