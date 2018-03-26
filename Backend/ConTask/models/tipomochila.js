'use strict';
module.exports = (sequelize, DataTypes) => {
  var TipoMochila = sequelize.define('TipoMochila', {
    nombre: DataTypes.STRING
  }, {
    tableName: 'tipomochila'
  });
  TipoMochila.associate = function(models) {
    TipoMochila.hasMany(models.Mochila, {
      foreignKey: 'tipomochilaId'
    })
  };
  return TipoMochila;
};