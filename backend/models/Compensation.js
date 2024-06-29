const mongoose = require('mongoose');

const CompensationSchema = new mongoose.Schema({
  role: { type: String, required: true },
  degree: { type: String, required: true },
  monthly: { type: Number, required: true },
  annual: { type: Number, required: true },
});

const Compensation = mongoose.model('Compensation', CompensationSchema);

module.exports = Compensation;
