'use strict';

module.exports = (sequelize, DataTypes) => {
  var Poblacion = sequelize.define('Poblacion', {
    nombre: DataTypes.STRING,
    cod_postal: DataTypes.STRING
  }, {
    tableName: 'poblacion'
  });
  Poblacion.associate = function(models) {
    Poblacion.belongsTo(models.Provincia, {
      foreignKey: 'provinciaId'
    });
  };
  return Poblacion;
};