const express = require('express');
const Application = require('../models/Application');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create Application
router.post('/', protect, async (req, res) => {
  const { position } = req.body;
  try {
    const application = new Application({ user: req.user._id, position });
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Applications
router.get('/', protect, async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user._id });
    res.json(applications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
