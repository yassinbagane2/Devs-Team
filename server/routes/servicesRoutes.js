const express = require("express");
const router = express.Router();

const { getHashtags, getContentIdeas } = require('../controllers/servicesController');
// const { protect } = require("../middleware/authMiddleware");

router.post('/hashtag', getHashtags);
router.post('/ideas', getContentIdeas);

module.exports = router;