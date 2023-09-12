const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/api/post');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, postsController.index);
router.post('/', ensureLoggedIn, postsController.create);

module.exports = router;