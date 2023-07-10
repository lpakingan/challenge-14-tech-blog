const router = require("express").Router();
const { User, BlogPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

// gets all posts that are stored and shows them on the homepage
router.get("/", async (req, res) => {
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

// gets a single blogpost with id
router.get("/blogpost/:id", withAuth, async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
        },
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
      ],
    });

    const post = postData.get({ plain: true });

    // renders the single blogpost on its own page
    res.render("individual-post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// redirect to the login page if the user is not logged in
router.get("/login", (req, res) => {
  // if a session exists, redirect the user to the homepage; else redirect to login screen
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// redirect to the signup page if user wants to sign up
router.get("/signup", (req, res) => {
  // if a session exists, redirect the user to the homepage; else redirect to login screen
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
