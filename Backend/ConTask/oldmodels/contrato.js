'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contrato = sequelize.define('Contrato', {
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    id_tipoContrato: DataTypes.INTEGER,
    id_empresa: DataTypes.INTEGER
  }, {});
  Contrato.associate = function(models) {
    // associations can be defined here
  };
  return Contrato;
};