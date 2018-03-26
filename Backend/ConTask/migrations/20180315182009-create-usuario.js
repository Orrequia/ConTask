'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grupoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'grupo',
          key: 'id'
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      correo: {
          type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};