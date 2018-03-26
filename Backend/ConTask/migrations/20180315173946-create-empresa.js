'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresa', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        tipoempresaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tipoempresa',
                key: 'id'
            }
        },
        nif: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        notas: {
            type: Sequelize.STRING
        },
        enlaceArchivos: {
            type: Sequelize.STRING
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
  return queryInterface.dropTable('empresa');
}
};