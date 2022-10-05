const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const studentController = require("../controllers/students");
const interventionController = require("../controllers/interventions");
const recordController = require("../controllers/record");
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Student = require('../models/Student')
const Intervention = require('../models/Intervention')
const InterventionRecord = require('../models/InterventionRecord')

router.get("/", homeController.getIndex);
router.get("/dashboard", ensureAuth, studentController.getDashboard);
router.get("/interventions", ensureAuth, interventionController.getInterventionList);
router.get("/records", ensureAuth, recordController.getRecord);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
module.exports = router