const express = require('express');
const { createEvent, updateEvent, deleteEvent, getEvents } = require('../controllers/eventController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', [authMiddleware, adminMiddleware], createEvent);
router.put('/:id', [authMiddleware, adminMiddleware], updateEvent);
router.delete('/:id', [authMiddleware, adminMiddleware], deleteEvent);
router.get('/', authMiddleware, getEvents);

module.exports = router;
