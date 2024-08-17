const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
