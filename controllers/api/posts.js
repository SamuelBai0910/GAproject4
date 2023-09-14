const post = require('../../models/post');
const Post = require('../../models/post');

module.exports = {
    index,
    show,
    create,
    delete: deletePost,
    update
};

async function index(req, res) {
    try {
        const posts = await Post.find({user: req.user._id});
        res.json(posts);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function show(req, res) {
  console.log("hihi");
  try {
      const post = await Post.findById(req.params.id);
      console.log(post);
      res.json(post);
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

async function deletePost(req, res) {
  try {
      await Post.deleteOne({_id: req.params.id, user: req.user._id});
      console.log('delete');
      res.json(true);
  } catch (err) {
      res.status(400).json(err);
  }
}

async function update(req, res) {
  console.log("another hello");
  try {
    let post = await Post.findByIdAndUpdate(
      {_id: req.params.id}, 
      {$set: req.body}
      )
    post.save();
    // console.log(post);
    res.json(post);
  } catch (err) {
      console.log(err)
      res.status(400).json(err);
  }
}