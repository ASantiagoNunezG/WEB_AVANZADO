'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordencompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ordencompra.belongsTo(models.laboratorio,{
        foreignKey:"codlab",
      })
    }
  }
  ordencompra.init({
    nroordenc: DataTypes.INTEGER,
    fechaemision: DataTypes.DATE,
    situacion: DataTypes.STRING,
    total: DataTypes.DOUBLE,
    codlab: DataTypes.INTEGER,
    nrofacturaprov: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ordencompra',
  });
  return ordencompra;
};