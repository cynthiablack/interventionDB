const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Intervention Record Routes - simplified for now
router.get("/:id", ensureAuth, recordController.getRecord);

router.post("/createRecord/:id", recordController.createRecord);

router.put("/editRecord/:id", recordController.editRecord);

router.delete("/deleteRecord/:id", recordController.deleteRecord);

module.exports = router;