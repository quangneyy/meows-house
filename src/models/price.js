'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        
    }
  };
  // object relational mapping
  Price.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};