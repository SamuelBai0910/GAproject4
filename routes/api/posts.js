const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, postsController.index);
router.post('/', ensureLoggedIn, postsController.create);
router.get('/:id', ensureLoggedIn, postsController.show);
router.delete('/:id', ensureLoggedIn, postsController.delete);
router.put('/:id', ensureLoggedIn, postsController.update);

module.exports = router;