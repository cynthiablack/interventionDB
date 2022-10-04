const express = require('express')
const router = express.Router()
const homeController = require("../controllers/home");
//const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Student = require('../models/Student')

// @desc    Login/Landing page
// @route   GET /
/*router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})*/

// @desc    Dashboard
// @route   GET /dashboard
router.get("/", homeController.getDashboard);
/*
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
      const students = await Student.find({ user: req.user.id }).lean()
      res.render('dashboard', {
        students,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })*/

// @desc    Show edit student page
// @route   GET /students/edit/:id
/*router.get('/students/edit/:id', ensureAuth, async (req, res) => {
  try {
    const student = await Student.findOne({
      _id: req.params.id,
    }).lean()

    if (!student) {
      return res.render('error/404')
    }

    if (student.user != req.user.id) {
      res.redirect('/dashboard')
    } else {
      console.log(_id)
      res.render('students/edit', {
        student,
      })
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})
*/
module.exports = router