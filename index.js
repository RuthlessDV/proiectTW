"use strict";

//Initializare Express
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 5000);

//Initializare Sequelize
const sequelize = require("./sequelize");

//Import modele create
const Student = require("./models/student");
require("./models/profesor");
const Proiect = require("./models/proiect");

//Middleware pt Express
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Routers
const routerStudent = require("./routes/students");
app.use("/students", routerStudent);
const routerProiect = require("./routes/projects");
app.use("/projects", routerProiect);

//Definire relatii entitati
Proiect.hasMany(Student);

//BD
app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Baza de date creata cu modele!" });
  } catch (err) {
    next(err);
  }
});

//Pornire aplicatie
app.listen(app.get("port"), async () => {
  console.log(`Server started at http://localhost:${app.get("port")}`);
  try {
    await sequelize.authenticate();
    console.log("Connection successfull");
  } catch (err) {
    console.error("Connection failed: ", error);
  }
});

//Middleware pt erori cu status 500
app.use((err, req, res, next) => {
  console.error(`[ERROR]: ${err.stack}`);
  res.status(500).json(err);
});

app.use("/", express.static("../front"));
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
