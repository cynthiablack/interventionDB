const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Intervention = require('../models/Intervention')

// @desc    Show add intervention page
// @route   GET /interventions/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('interventions/add')
})

// @desc    Process add intervention
// @route   POST /interventions
router.post('/', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Intervention.create(req.body)
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

module.exports = router