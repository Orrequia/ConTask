'use strict';
module.exports = (sequelize, DataTypes) => {
  var TipoEmpresa = sequelize.define('TipoEmpresa', {
    nombre: DataTypes.STRING
  }, {});
  TipoEmpresa.associate = function(models) {
    // associations can be defined here
  };
  return TipoEmpresa;
};