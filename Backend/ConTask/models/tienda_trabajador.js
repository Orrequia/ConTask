'use strict';
module.exports = (sequelize, DataTypes) => {
  var tienda_trabajador = sequelize.define('tienda_trabajador', {}, {
    tableName: 'tienda_trabajador'
  });
  tienda_trabajador.associate = function(models) {
    /*tienda_trabajador.belongsTo(models.Tienda, {
      foreignKey: 'tiendaId'
    });
    tienda_trabajador.belongsTo(models.Trabajador, {
      foreignKey: 'trabajadorId'
    });*/
  };

  return tienda_trabajador;
};