'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mochila = sequelize.define('Mochila', {
    numero: DataTypes.STRING,
    id_tipoMochila: DataTypes.INTEGER,
    id_tienda: DataTypes.INTEGER
  }, {});
  Mochila.associate = function(models) {
    // associations can be defined here
  };
  return Mochila;
};