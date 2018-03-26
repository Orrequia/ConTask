'use strict';
module.exports = (sequelize, DataTypes) => {
  var TipoEmpresa = sequelize.define('TipoEmpresa', {
    nombre: DataTypes.STRING
  }, {
    tableName: 'tipoempresa'
  });
  TipoEmpresa.associate = function(models) {
    TipoEmpresa.hasMany(models.Empresa, {
      foreignKey: 'tipoempresaId'
    });
  };
  return TipoEmpresa;
};