const Student = require("../models/Student");
const InterventionRecord = require("../models/InterventionRecord");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const students = await Student.find({ user: req.user.id });
      res.render("students.ejs", { students: students, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getStudent: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      res.render("students.ejs", { student: student, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createStudent: async (req, res) => {
    try {
      await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        user: req.user.id,
      });
      console.log("Student has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  deleteStudent: async (req, res) => {
    try {
      // Find student by id
      let student = await Student.findById({ _id: req.params.id });
      // Delete student from db
      await Student.remove({ _id: req.params.id });
      console.log("Deleted Student");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};