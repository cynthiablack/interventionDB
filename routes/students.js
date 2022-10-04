const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Student Routes - simplified for now
router.get("/:id", ensureAuth, studentController.getStudent);

router.post("/createStudent", studentController.createStudent);

router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;