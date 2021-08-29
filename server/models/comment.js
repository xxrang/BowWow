'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.hasMany(models.post,{foreignKey: "posts_id", sourceKey: 'id'})
      models.comment.hasMany(models.user,{foreignKey: "user_id", sourceKey: 'id'})
    }
  };
  comment.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};