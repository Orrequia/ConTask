'use strict';
module.exports = (sequelize, DataTypes) => {
  var LineaContrato = sequelize.define('LineaContrato', {
    precio: DataTypes.FLOAT
  }, {
    tableName: 'lineacontrato'
  });
    LineaContrato.associate = function(models) {
      LineaContrato.belongsTo(models.Mochila, {
        foreignKey: 'mochilaId'
    });
      LineaContrato.belongsTo(models.Contrato, {
        foreignKey: 'contratoId'
    });
      LineaContrato.belongsTo(models.TipoContrato, {
        foreignKey: 'tipocontratoId'
    });
  };
  return LineaContrato;
};