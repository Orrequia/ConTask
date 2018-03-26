'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contrato = sequelize.define('Contrato', {
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    pagado: {
        type: DataTypes.BOOLEAN,
        default: false
    }
  }, {
    tableName: 'contrato'
  });
  Contrato.associate = function(models) {
    Contrato.hasMany(models.LineaContrato, {
      foreignKey: 'contratoId',
      as: 'LineaContrato'
    });
    Contrato.belongsTo(models.Empresa, {
      foreignKey: 'empresaId'
    });
  };
  return Contrato;
};