// import the models
const User = require("./User");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

// user has many blog posts, user identified by their id
User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// a blog post only belongs to one user, designated by the user_id reference
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

// user has many comments, user identified by their id
User.hasMany(Comment, {
  foreignKey: "commenter_id",
  onDelete: "CASCADE",
});

// a comment only belongs to one user, designated by the commenter_id reference
Comment.belongsTo(User, {
  foreignKey: "commenter_id",
});

// blog post has many comments, blog post identified by its id
BlogPost.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// a comment only belongs to one blogpost, designated by the post_id reference
Comment.belongsTo(BlogPost, {
  foreignKey: "post_id",
});

// export the model associations
module.exports = { User, BlogPost, Comment };
