// Loads express
const express = require("express");
// import the controller function
const getData = require("./Controller/getData");
// call getData
const LabData = getData();

// create an instance of express
const app = express();
const PORT = 3000;
console.log("Hey Ms.Parker")

// Middleware functions
// they update the request as soon as they come in.
app.use((req, res, next) => {
  console.log(`Running middleware function!!!`);
  next(); // got to the next middleware or to the response
});
// JSON Middleware
app.use(express.json())
// if we dont need to read data from the url 
app.use(express.urlencoded({extended: false}))


// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./Views");

// Root route
app.get("/home", (req, res) => {
  res.render("home", {
    pageTitle: "Home Page!",
    pageHeader: "Home Page",
    data: LabData,
  });
});
app.get("/students", (req, res) => {
  res.render("students", {
    pageTitle: "Student Page!",
    pageHeader: "Student Page",
    data: LabData,
  });
});
app.get("/searchStudents", (req, res) => {
  res.render("searchStudents", {
    pageTitle: "Add new student Page!",
    pageHeader: "Add new student Page",
    data: LabData,
  });
});
app.get("/Holidays", (req, res) => {
  res.render("Holidays", {
    pageTitle: "holidays Page!",
    pageHeader: "holidays Page",
  });
});
app.get("/Curriculum", (req, res) => {
  res.render("Curriculum", {
    pageTitle: "Curriculum Page!",
    pageHeader: "Curriculum Page",
  });
});
app.get("/Testing", (req, res) => {
  res.render("Testing", {
    pageTitle: "Testing Page!",
    pageHeader: "Testing Page",
  });
});
app.get("/Ceremonies", (req, res) => {
  res.render("Ceremonies", {
    pageTitle: "Ceremonies Page!",
    pageHeader: "Ceremonies Page",
  });
});
app.get("/username", (req, res) => {
  res.render("username",{
    pageTitle: "Welcome to the homework page!!",
    pageHeader: "Homework Page",
    data: LabData,
  });
});
app.get("/supplies", (req, res) => {
  res.render("supplies", {
    pageTitle: "supplies Page!",
    pageHeader: "supplies Page",
  });
});
app.get("/classes", (req, res) => {
  res.render("classes", {
    pageTitle: "classes Page!",
    pageHeader: "classes Page",
  });
});
app.get("/teachers", (req, res) => {
  res.render("teachers", {
    pageTitle: "teachers Page!",
    pageHeader: "teachers Page",
  });
});

// App Listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });