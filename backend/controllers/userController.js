const User = require('../models/user');
const Event = require('../models/event');

exports.registerForEvent = async (req, res) => {
  const { eventId } = req.params;
  const event = await Event.findById(eventId);

  if (event.participantLimit > event.waitlist.length) {
    event.waitlist.push(req.user._id);
    await event.save();
    res.status(200).json({ message: 'Successfully registered' });
  } else {
    res.status(400).json({ message: 'Event is full' });
  }
};

exports.cancelRegistration = async (req, res) => {
  const { eventId } = req.params;
  const event = await Event.findById(eventId);

  event.waitlist = event.waitlist.filter(userId => userId.toString() !== req.user._id.toString());
  await event.save();
  res.status(200).json({ message: 'Successfully cancelled registration' });
};
