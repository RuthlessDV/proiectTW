const Student = require("../models/student");
//const {Op} = require("sequelize");

const router = require("express").Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const students = await Student.findAll();
      return res.status(200).json(students);
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newStudent = await Student.create(req.body);
      return res.status(200).json(newStudent);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.idStudent);
      if (student) {
        return req.status(200).json(student);
      } else {
        return req
          .status(404)
          .json({ error: `nu a fost gasit id = ${req.params.id} ` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.id);
      if (student) {
        const updatedStudent = await Student.update(req.body);
        return req.status(200).json(updatedStudent);
      } else {
        return req
          .status(404)
          .json({ error: `nu a fost gasit id = ${req.params.id} ` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;
