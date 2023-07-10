const router = require("express").Router();

const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const blogPostRoutes = require("./blogPostRoutes");

router.use("/user", userRoutes);
router.use("/comment", commentRoutes);
router.use("/post", blogPostRoutes);

module.exports = router;
