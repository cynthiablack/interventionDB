const InterventionRecord = require("../models/InterventionRecord");
const Intervention = require("../models/Intervention");
const Student = require("../models/Student");

module.exports = {
  createRecord: async (req, res) => {
    try {
      await InterventionRecord.create({
        date: req.body.date,
        intervention: req.body.title,
        activity: req.body.activity,
        duration: req.body.duration,
        anecdotalNotes: req.body.anecdotalNotes,
        student: req.params.id,
        user: req.user.id,
      });
      console.log("Intervention data has been added!");
      res.redirect("/students/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  getRecord: async (req, res) => {
    try {
      const interventions = await Intervention.find({ user: req.user.id });
      const records = await InterventionRecord.findById(req.params.id);
      const student = await Student.findById(req.params.id);
      const fullRecord = interventions.find(y => y._id.toString() === records.intervention.toString());

      res.render("record.ejs", { records: records, student: req.student, interventions: req.interventions, title: fullRecord.title });
    } catch (err) {
      console.log(err);
    }
  },
  editRecord: async (req, res) => {
    try {
      await Record.findOneAndUpdate(
        { _id: req.params.id },
      
        
          {...req.body }
         
      
      );
      console.log("Record updated");
      res.redirect(`/records/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteRecord: async (req, res) => {
    try {
      // Find record by id
      let record = await InterventionRecord.findById({ _id: req.params.id });
      // Delete record from db
      await InterventionRecord.remove({ _id: req.params.id });
      console.log("Deleted intervention record");
      res.redirect(`/students/${req.student.id}`);
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};