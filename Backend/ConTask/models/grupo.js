'use strict';
module.exports = (sequelize, DataTypes) => {
  var Grupo = sequelize.define('Grupo', {
    nombre: DataTypes.STRING
  }, {
    tableName: 'grupo'
  });
  Grupo.associate = function(models) {
      Grupo.hasMany(models.Usuario, {
        foreignKey: 'grupoId'
      });
  };
  return Grupo;
};