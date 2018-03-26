'use strict';
module.exports = (sequelize, DataTypes) => {
  var Empresa = sequelize.define('Empresa', {
    nif: {
      type: DataTypes.STRING,
      unique: true
    },
    nombre: DataTypes.STRING,
    notas: DataTypes.STRING,
    enlaceArchivos: DataTypes.STRING,
    id_tipoEmpresa: DataTypes.INTEGER,
    id_contrato: DataTypes.INTEGER,

  }, {});
  Empresa.associate = function(models) {
    this
  };

  Empresa.prototype.toWeb = function (pw) {

    let json = this.toJSON();
    return json;
  };

  return Empresa;
};