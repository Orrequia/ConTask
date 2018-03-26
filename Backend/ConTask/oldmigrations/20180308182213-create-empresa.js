'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nif: {
        type: Sequelize.STRING,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      notas: {
        type: Sequelize.STRING
      },
      enlaceArchivos: {
        type: Sequelize.STRING
      },
      tipoEmpresa: {
        type: Sequelize.INTEGER
      },
      id_contrato: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Empresas');
  }
};