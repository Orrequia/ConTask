'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trabajador = sequelize.define('Trabajador', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    id_empresa: DataTypes.INTEGER
  }, {});

  Trabajador.associate = function(models) {
    // associations can be defined here
  };

  Trabajador.prototype.toWeb = function (pw) {

      let json = this.toJSON();
      return json;
  };

  return Trabajador;
};