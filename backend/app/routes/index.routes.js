const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "index route" });
});

router.use("/api/blog", require("./blog.routes"))
router.use("/api/test", require("./user.routes"))

module.exports = router;
