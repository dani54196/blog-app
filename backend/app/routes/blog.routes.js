const express = require("express");
const router = express.Router();

const {
  getBlogs
} = require("../controllers/blog.controllers");

router.route("/").get(getBlogs) //.post(createPost);

// router.route("/:id").get(getPost).delete(deletePost).patch(updatePost);

module.exports = router;
