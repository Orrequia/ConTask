'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provincia = sequelize.define('Provincia', {
    nombre: DataTypes.STRING
  }, {
    tableName: "provincia"
  });
  Provincia.associate = function(models) {
    Provincia.hasMany(models.Poblacion, {
      foreignKey: 'provinciaId',
      as: 'Poblacion'
    });
    Provincia.hasMany(models.Tienda, {
      foreignKey: 'provinciaId'
    });
  };
  return Provincia;
};