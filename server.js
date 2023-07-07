// import packages required for establishing cookies/session and running application
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");

// call in the sequelize object from the config file
// create SequelizeStore object for storing the user's session
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// run app with express and establish port to run app from
const app = express();
const PORT = process.env.PORT || 3001;

// create session with cookie/parameters then link the session with the store object
const sess = {
  secret: "Secret Random Cookie",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// add express-session
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize and run the app at the designated port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
