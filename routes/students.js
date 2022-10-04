const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Student = require('../models/Student')

// @desc    Show add student page
// @route   GET /students/add
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

  // @desc    Show edit student page
// @route   GET /students/edit/:id
router.get('/edit/:id', ensureAuth, (req, res) => {
  res.render('students/add')
})

  // @desc    Show all students
// @route   GET /students
router.get('/', ensureAuth, async (req, res) => {
  try {
    const students = await Student.find({ user: req.user.id }).lean()
    res.render('students/index', {
      students,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

  // @desc    Show one student
// @route   GET /students/:id
router.get('/:id', ensureAuth, (req, res) => {
  res.send('one student')
})

module.exports = router