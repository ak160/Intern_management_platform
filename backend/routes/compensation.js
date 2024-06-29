const express = require('express');
const Compensation = require('../models/Compensation');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create Compensation
router.post('/', protect, async (req, res) => {
  const { role, degree, monthly, annual } = req.body;
  try {
    const compensation = new Compensation({ role, degree, monthly, annual });
    await compensation.save();
    res.status(201).json(compensation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Compensations
router.get('/', protect, async (req, res) => {
  try {
    const compensations = await Compensation.find();
    res.json(compensations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
