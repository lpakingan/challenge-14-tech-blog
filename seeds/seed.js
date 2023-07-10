const sequelize = require("../config/connection");

// import the json files with the user data
const seedUsers = require("./userData.js");
const seedBlogPosts = require("./blogPostData.js");
const seedComments = require("./commentsData.js");

// connect to the individual json files to populate tables
const seedData = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBlogPosts();
  console.log("\n----- BLOG POSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedData();
