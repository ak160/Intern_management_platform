const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  position: { type: String, required: true },
  status: { type: String, default: 'Pending' },
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;
