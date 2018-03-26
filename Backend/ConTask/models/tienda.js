'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tienda = sequelize.define('Tienda', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo: DataTypes.STRING,
  }, {
    tableName: 'tienda'
  });
  Tienda.associate = function(models) {
    Tienda.belongsTo(models.Provincia, {
      foreignKey: 'provinciaId',
      as: 'Provincia'
    });
    Tienda.hasMany(models.Mochila, {
      foreignKey: 'tiendaId',
      as: 'Mochila'
    });
    Tienda.belongsTo(models.Empresa, {
      foreignKey: 'empresaId'
    });
    Tienda.belongsTo(models.Trabajador, {
      foreignKey: 'responsableId',
      as: 'Responsable'
    });
    Tienda.belongsToMany(models.Trabajador, {
      through: 'tienda_trabajador',
      as: 'Trabajador',
      foreignKey: 'tiendaId'
    });
  };

  Tienda.prototype.toWeb = function (pw) {

      let json = this.toJSON();
      return json;
  };
  return Tienda;
};