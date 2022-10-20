const InterventionRecord = require("../models/InterventionRecord");
const Intervention = require("../models/Intervention");
const Student = require("../models/Student");

module.exports = {
  createRecord: async (req, res) => {
    const interventions = await Intervention.findById(req.params.id);
    try {
      await InterventionRecord.create({
        record: req.body.record,
        student: req.params.id,
        user: req.user.id,
      });
      console.log("Intervention data has been added!");
      res.redirect("/student/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  getRecord: async (req, res) => {
    try {
      const intervention = await Intervention.findById(req.params.id);
      const records = await InterventionRecord.find({record: req.params.id}).sort({ createdAt: "desc" }).lean();
      const student = await Student.findById(req.params.id);
      res.render("record.ejs", { student: student, user: req.user, records: records, intervention: intervention });
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
      await InterventionRecord.deleteOne({ _id: req.params.id });
      console.log("Deleted intervention record");
      res.redirect(`/student/${req.params.id}`);
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};