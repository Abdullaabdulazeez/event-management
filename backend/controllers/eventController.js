const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  const { name, date, time, location, description, participantLimit } = req.body;
  const event = new Event({ name, date, time, location, description, participantLimit, createdBy: req.user._id });
  await event.save();
  res.status(201).json(event);
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const event = await Event.findByIdAndUpdate(id, updates, { new: true });
  res.status(200).json(event);
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(204).send();
};

exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
};
