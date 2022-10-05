const Intervention = require("../models/Intervention");

module.exports = {
    getInterventionList: async (req, res) => {
        try {
          const interventions = await Intervention.find({ user: req.user.id });
          res.render("interventions.ejs", { interventions: interventions, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
  getIntervention: async (req, res) => {
    try {
      const intervention = await Intervention.findById(req.params.id);
      res.render("intervention.ejs", { intervention: intervention, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createIntervention: async (req, res) => {
    try {
      await Intervention.create({
        title: req.body.title,
        source: req.body.source,
        targetArea: req.body.targetArea,
        user: req.user.id,
      });
      console.log("Intervention has been added!");
      res.redirect("/interventions");
    } catch (err) {
      console.log(err);
    }
  },
  editIntervention: async (req, res) => {
    try {
      await Intervention.findOneAndUpdate(
        { _id: req.params.id },
          {...req.body }
      );
      console.log("Intervention updated");
      res.redirect(`/interventions/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};