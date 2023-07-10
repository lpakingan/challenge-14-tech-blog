const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "This is a comment of a post",
    post_id: 1,
  },
  {
    comment_date: "7/10/23",
    comment_content: "This is a comment on this post",
    post_id: 1,
  },
  {
    comment_date: "7/11/23",
    comment_content: "This is another comment on another post",
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
