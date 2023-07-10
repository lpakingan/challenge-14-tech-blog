// import required package and User model
const router = require("express").Router();
const { User } = require("../../models");

// create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.username = newUser.username;
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json({
        user: newUser,
        message: "Successfully created new user! You are now logged in!",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// login user by checking if the username exists
router.post("/login", async (req, res) => {
  try {
    const returningUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // if the username is not found, tell user they have the wrong login credentials
    if (!returningUser) {
      res.status(400).json({
        message: "User not found. Please try again!",
      });
      return;
    }

    // calls on the checkPassword function in the User model to compare input password to stored one
    const validPassword = await returningUser.checkPassword(req.body.password);

    // if the password is not valid, tell user they have the wrong login credentials
    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect login credentials! Please try again.",
      });
      return;
    }

    // save the session using the user's username and id, and return the user as being logged in
    req.session.save(() => {
      req.session.username = returningUser.username;
      req.session.user_id = returningUser.id;
      req.session.logged_in = true;

      res.status(200).json({
        user: returningUser,
        message: "Welcome back! You are now logged in!",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// logout user if they are logged in; remove current session
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
