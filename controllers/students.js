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
      const students = await Student.find({ user: req.user.id });
      const records = await InterventionRecord.find({record: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("students.ejs", { students: students, student: student, user: req.user, records: records });
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
  editStudent: async (req, res) => {
    try {
      const student = await Student.findById({ id: req.params.id });
      await Student.findOneAndUpdate(
        { _id: req.params.id },
          {
            $set: {
              firstName: req.body.firstName,
              lastName: req.body.lastName
            }
          }
      );
      console.log("Student updated");
      res.redirect('/dashboard');
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