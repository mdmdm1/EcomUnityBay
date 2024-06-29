const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
  console.log("midd 1 IS EXCECUTED");
};
const middleware2 = (req, res, next) => {
  console.log("middle 2 executed");
  next();
};
// route handler
const routeHandler = (req, res) => {
  res.send("hello world");
};

//applying middleware to the route
app.get("/", middleware1, middleware2, routeHandler);
const PORT = 3000;
app.listen(PORT, () => {
  console.log("port is running on port ${PORT}");
});
