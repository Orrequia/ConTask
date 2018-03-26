'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tienda_trabajador', {
      tiendaId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
              model: 'tienda',
              key: 'id'
          }
      },
      trabajadorId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
              model: 'trabajador',
              key: 'id'
          }
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
    return queryInterface.dropTable('tienda_trabajador');
  }
};