const { BlogPost } = require("../models");

const blogPostData = [
  {
    post_title: "Test",
    post_date: "7/9/23",
    post_content: "This is the content of the post",
    user_id: 1,
  },
  {
    post_title: "Test 2",
    post_date: "7/10/23",
    post_content: "This is more content of another post",
    user_id: 1,
  },
  {
    post_title: "Test 3",
    post_date: "7/11/23",
    post_content: "This is even more content of another another post",
    user_id: 2,
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
