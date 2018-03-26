'use strict';
module.exports = (sequelize, DataTypes) => {
  var TipoMochila = sequelize.define('TipoMochila', {
    nombre: DataTypes.STRING
  }, {});
  TipoMochila.associate = function(models) {
    // associations can be defined here
  };
  return TipoMochila;
};