const Blog = require("../models/blog.models")

const postsCtrl = {};

postsCtrl.getBlogs = async (req, res) => {

  try {
    Blog.findAll().then((blogs) => {
      res.json(blogs);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

/*
postsCtrl.createPost = async (req, res) => {
  try {
    Post.create({
      title: req.body.title,
      body: req.body.body,
    }).then((post) => {
      res.json(post);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

postsCtrl.getPost = async (req, res) => {
  try {
    Post.findByPk(req.params.id).then((post) => {
      res.json(post);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

postsCtrl.deletePost = async (req, res) => {
  try {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "post delete" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

postsCtrl.updatePost = async (req, res) => {
  try {
    Post.update(
      { title: req.body.title, body: req.body.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({ msg: "update posts" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

*/
module.exports = postsCtrl;
