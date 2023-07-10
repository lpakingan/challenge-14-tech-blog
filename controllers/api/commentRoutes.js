const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res
      .status(200)
      .json({ newComment, message: "Successfully created comment!" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
