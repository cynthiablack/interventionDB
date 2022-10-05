const InterventionRecord = require("../models/InterventionRecord");
const Intervention = require("../models/Intervention");
const Student = require("../models/Student");

module.exports = {
  getRecords: async (req, res) => {
    try {
      const records = await InterventionRecord.find({ user: req.user.id });
      res.render("records.ejs", { records: records, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getRecord: async (req, res) => {
    try {
      const record = await InterventionRecord.findById(req.params.id);
      const intervention = await Intervention.findById(req.params.id);
      const student = await Student.findById(req.params.id);
      res.render("records.ejs", { record: record, user: req.user, student: student });
    } catch (err) {
      console.log(err);
    }
  },
  createRecord: async (req, res) => {
    const student = await Student.findById(req.params.id);
    const intervention = await Intervention.findById(req.params.id);
    try {
      await Record.create({
        activity: req.body.activity,
        anecdotalNotes: req.body.anecdotalNotes,
        duration: req.body.duration,
        assessmentGiven: req.body.assessmentGiven,
        title: req.intervention.id,
        student: req.student.id,
        user: req.user.id,
      });
      console.log("Record has been added!");
      res.redirect("/records");
    } catch (err) {
      console.log(err);
    }
  },
  deleteRecord: async (req, res) => {
    try {
      // Find record by id
      let record = await Record.findById({ _id: req.params.id });
      // Delete record from db
      await Record.remove({ _id: req.params.id });
      console.log("Deleted record");
      res.redirect("/records");
    } catch (err) {
      res.redirect("/records");
    }
  },
};