const Post = require('../../models/post');

module.exports = {
    index,
    create,
};

async function index(req, res) {
    try {
        const posts = await Post.find({user: req.user._id});
        res.json(posts);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const post = await Post.create({
            title: req.body.title,
            summary: req.body.summary,
            content: req.body.content,
            image: req.body.image,
            user: req.user._id
        });
        res.json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}