const Student = require("../models/Student");
const Intervention = require("../models/Intervention");
const InterventionRecord = require("../models/InterventionRecord");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const students = await Student.find({ user: req.user.id });
      res.render("dashboard.ejs", { students: students, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getStudent: async (req, res) => {
    try {
      const interventions = await Intervention.find({ user: req.user.id });
      const student = await Student.findById(req.params.id);
      const records = await InterventionRecord.find({student: req.params.id}).sort({ createdAt: "desc" }).lean();
      
      for (let i = 0; i < records.length; i++){
        const fullRecord = interventions.find(y => y._id.toString() === records[i].intervention.toString());
        records[i].interventionTitle = fullRecord.title;
        console.log(fullRecord.title)
        };

      res.render("student.ejs", { student: student, user: req.user, records: records, interventions: interventions });
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
      await Student.findOneAndUpdate(
        { _id: req.params.id },
      
        
          {...req.body }
         
      
      );
      console.log("Student updated");
      res.redirect(`/students/${req.params.id}`);
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