'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provincia = sequelize.define('Provincia', {
    nombre: DataTypes.STRING
  }, {});
  Provincia.associate = function(models) {
    // associations can be defined here
  };
  return Provincia;
};