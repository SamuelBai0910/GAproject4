const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/api/post');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, postsController.index);
router.post('/', ensureLoggedIn, postsController.create);
router.post('/posts/:id', ensureLoggedIn, postsController.show);

module.exports = router;