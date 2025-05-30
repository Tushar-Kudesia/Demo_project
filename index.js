const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const port = 3000;
app.get("/", (req, res) => {
  res.render("index", { title: "EJS App", message: "Hello from EJS ! " });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const express = require("express");
// const path = require("path");
// const app = express();
// var bodyParser = require("body-parser");
// const port = 3000;
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// app.get("/", (req, res) => {
//   res.render("index", { message: "Hello from EJS" });
// });
// app.get("/about", (req, res) => {
//   res.send("This is the about page");
// });
