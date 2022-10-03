const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Student = require('../models/Student')

// @desc    Show add student page
// @route   GET /students/addstudent
router.get('/add', ensureAuth, (req, res) => {
  res.render('students/add')
})

// @desc    Process add student
// @route   POST /students
router.post('/', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Student.create(req.body)
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

module.exports = router