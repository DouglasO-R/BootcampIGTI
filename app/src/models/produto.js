'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  produto.init({
    codigo: {
      type: DataTypes.STRING,
      allowNull:false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull:false
    },
    preco: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'produto',
  });
  return produto;
};