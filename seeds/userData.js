const { User } = require("../models");

const userData = [
  {
    username: "testuser123",
    password: "password123",
  },
  {
    username: "userwithname",
    password: "passwithword",
  },
  {
    username: "iamuser",
    password: "iampassword",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
