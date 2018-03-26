'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trabajador = sequelize.define('Trabajador', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                msg: "El correo es invalido"
            }
        }
    },
    telefono: DataTypes.STRING,
  }, {
      tableName: 'trabajador'
  });
  Trabajador.associate = function(models) {
    Trabajador.belongsTo(models.Empresa, {
        foreignKey: 'empresaId'
    });
    Trabajador.belongsToMany(models.Tienda, {
        through: 'tienda_trabajador',
        as: 'Tienda',
        foreignKey: 'trabajadorId'
    });
  };

  return Trabajador;
};