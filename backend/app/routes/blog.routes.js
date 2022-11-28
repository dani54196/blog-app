const express = require("express");
const router = express.Router();

const {
  getBlogs,createABlog,getBlog,updateBlog,deleteBlog
} = require("../controllers/blog.controllers");

router.route("/").get(getBlogs).post(createABlog);

router.route("/:id").get(getBlog).delete(deleteBlog).put(updateBlog);

module.exports = router;
