// import sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// creates BlogPost class/model
class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id references the id of the user that posted it
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blogpost",
  }
);

module.exports = BlogPost;
