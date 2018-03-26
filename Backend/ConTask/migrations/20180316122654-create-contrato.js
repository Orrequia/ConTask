'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contrato', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresaId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'empresa',
              key: 'id'
          }
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      fecha_fin: {
          type: Sequelize.DATE
      },
      pagado: {
          type: Sequelize.BOOLEAN,
          default: false
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
    return queryInterface.dropTable('contrato');
  }
};