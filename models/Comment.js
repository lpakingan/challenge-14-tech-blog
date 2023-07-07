// import sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// creates Comment class/model
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // commenter_id references the id of the user that posts it
    commenter_id: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "id",
      },
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    comment_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // post_id references the id of the blogpost it is attached to
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogpost",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
