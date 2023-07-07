// import required package and User model
const router = require("express").Router();
const { User } = require("../../models");

// create a new user
router.post("/", async (req, res) => {
  try {
    const dbUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUser);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// login user by checking if the username exists
router.post("login", async (req, res) => {
  try {
    const dbUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // if the username is not found, tell user it is either incorrect or does not exist
    if (!dbUser) {
      res.status(400).json({
        message: "Incorrect username or does not exist! Please try again.",
      });
      return;
    }

    // calls on the checkPassword function in the User model to compare input password to stored one
    const validPassword = await dbUser.checkPassword(req.body.password);

    // if the password is not valid, tell user it is either incorrect or username does not exist
    if (!validPassword) {
      res.status(400).json({
        message:
          "Incorrect password or username does not exist! Please try again.",
      });
      return;
    }

    // save the session and return the user as being logged in
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ user: dbUser, message: "You are now logged in!" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// logout user if they are logged in; remove current session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
