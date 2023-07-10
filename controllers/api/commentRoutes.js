const router = require("express").Router();
const { Comment, BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

// create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res
      .status(200)
      .json({ newComment, message: "Successfully created comment!" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// get all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: BlogPost,
          attributes: ["post_title", "post_content"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
