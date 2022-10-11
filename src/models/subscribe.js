'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscribe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
    }
  };
  // object relational mapping
  Subscribe.init({
    emailSubscribe: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Subscribe',
  });
  return Subscribe;
};