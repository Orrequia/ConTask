'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mochila', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tiendaId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tienda',
            key: 'id'
        }
      },
      tipomochilaId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'tipomochila',
              key: 'id'
          }
      },
      licencia: {
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
    return queryInterface.dropTable('mochila');
  }
};