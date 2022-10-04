const express = require("express");
const router = express.Router();
const interventionController = require("../controllers/interventions");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Intervention Routes - simplified for now
router.get("/:id", ensureAuth, interventionController.getIntervention);

router.post("/createIntervention", interventionController.createIntervention);

router.delete("/deleteIntervention/:id", interventionController.deleteIntervention);

module.exports = router;