'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  House.init({
    location: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'House',
    tableName: 'houses',
    timestamps: false
  });

  return House;
};