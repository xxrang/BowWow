'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.post.hasMany(models.category_content,{foreignKey: "posts_id", sourceKey: 'id'})
      models.post.hasMany(models.user,{foreignKey: "user_id", sourceKey: 'id'})
      models.post.hasMany(models.comment,{foreignKey: "posts_id", sourceKey: 'id'})
    }
  };
  post.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    location: DataTypes.STRING,
    mobile: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};