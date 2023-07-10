const router = require("express").Router();
const { BlogPost } = require("../models");
const withAuth = require("../utils/auth");

// get all the user's posts to put on the dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const userPostData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const userposts = userPostData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      userposts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.log("Unable to fetch all user posts. Please try again!");
    res.status(500).json(error);
  }
});

// if the user wants to add a new post to dashboard, render the new post page
router.get("/new", withAuth, (req, res) => {
  res.render("newpost", {
    logged_in: req.session.logged_in,
  });
});

// if user wants to edit a post on the dashboard, render the edit post page
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id);

    const post = postData.get({ plain: true });

    res.render("editpost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.log("Unable to find ID of post to edit. Please try again!");
    res.status(500).json(error);
  }
});

module.exports = router;
