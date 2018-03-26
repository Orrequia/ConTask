'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tienda = sequelize.define('Tienda', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo: DataTypes.STRING,
    id_provincia: DataTypes.INTEGER,
    id_empresa: DataTypes.INTEGER
  }, {});
  Tienda.associate = function(models) {
    // associations can be defined here
  };

  Tienda.prototype.toWeb = function (pw) {

      let json = this.toJSON();
      return json;
  };

  return Tienda;
};