const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Student Routes - simplified for now
router.get("/:id", ensureAuth, studentsController.getStudent);

router.post("/createStudent", studentsController.createStudent);

router.post("/createFeedback", studentsController.createFeedback);

router.put("/editStudent/:id", studentsController.editStudent);

router.delete("/deleteStudent/:id", studentsController.deleteStudent);

module.exports = router;