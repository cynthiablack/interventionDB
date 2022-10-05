const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Intervention Routes - simplified for now
router.get("/:id", ensureAuth, recordController.getRecord);

router.post("/createRecord", recordController.createRecord);

router.delete("/deleteRecord/:id", recordController.deleteRecord);

module.exports = router;