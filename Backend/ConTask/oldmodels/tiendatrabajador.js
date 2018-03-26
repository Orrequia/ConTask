'use strict';
module.exports = (sequelize, DataTypes) => {
  var TiendaTrabajador = sequelize.define('TiendaTrabajador', {
    id_tienda: DataTypes.INTEGER,
    id_trabajador: DataTypes.INTEGER
  }, {});
  TiendaTrabajador.associate = function(models) {
    // associations can be defined here
  };
  return TiendaTrabajador;
};