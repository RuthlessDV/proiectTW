const Proiect = require("../models/proiect");
const Student = require("../models/student");

const router = require("express").Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const projects = await Proiect.findAll();
      return res.status(200).json(projects);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newProject = await Proiect.create(req.body);
      return res.status(200).json(newProject);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router.post("/:id/students", async (req, res, next) => {
  try {
    const project = await Proiect.findByPk(req.params.idProiect);
    if (project) {
      const student = new Student(req.body);
      student.idProiect = project.id;
      await student.save();
      res.status(201).json({
        message: "Student adaugat",
      });
    } else {
      req.status(404).json({
        message: "404- Proiectul nu a fost gasit",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
