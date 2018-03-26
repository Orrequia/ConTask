'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lineacontrato', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mochilaId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'mochila',
              key: 'id'
          }
      },
      contratoId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'contrato',
              key: 'id'
          }
      },
      tipocontratoId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'tipocontrato',
              key: 'id'
          }
      },
      precio: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('lineacontrato');
  }
};