const express = require('express');
const { registerForEvent, cancelRegistration } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register/:eventId', authMiddleware, registerForEvent);
router.post('/cancel/:eventId', authMiddleware, cancelRegistration);

module.exports = router;
