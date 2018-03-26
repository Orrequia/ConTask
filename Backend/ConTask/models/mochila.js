'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mochila = sequelize.define('Mochila', {
    licencia: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    tableName: 'mochila'
  });
  Mochila.associate = function(models) {
    Mochila.belongsTo(models.TipoMochila, {
      foreignKey: 'tipomochilaId'
    });
    Mochila.belongsTo(models.Tienda, {
      foreignKey: 'tiendaId'
    });
    Mochila.hasMany(models.LineaContrato, {
      foreignKey: 'mochilaId'
    })
  };
  return Mochila;
};