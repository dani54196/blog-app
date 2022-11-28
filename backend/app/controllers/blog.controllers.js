const Blog = require("../models/blog.models")

const blogCtrl = {};

blogCtrl.getBlogs = async (req, res) => {

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

blogCtrl.createABlog = async (req, res) => {
  try {
    Blog.create({
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

blogCtrl.getBlog = async (req, res) => {
  try {
    Blog.findByPk(req.params.id).then((post) => {
      res.json(post);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

blogCtrl.deleteBlog = async (req, res) => {
  try {
    Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "blog delete" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

blogCtrl.updateBlog = async (req, res) => {
  try {
    Blog.update(
      { title: req.body.title, body: req.body.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({ msg: "update blog" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = blogCtrl;