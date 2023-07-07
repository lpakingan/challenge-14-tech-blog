const router = require("express").Router();
const { User, BlogPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

// prevents non-logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
      ],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    // render the homepage and pass that the user is logged in
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  // if a session exists, redirect the user to the homepage; else redirect to login screen
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
