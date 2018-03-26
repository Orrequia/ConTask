'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        //Grupos
        return queryInterface.bulkInsert('grupo', [{
            id: 1,
            nombre: 'admin',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }])
        .then(_ => queryInterface.bulkInsert('grupo', [{
            id: 2,
            nombre: 'jefe',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }]))
        .then(_ => queryInterface.bulkInsert('grupo', [{
            id: 3,
            nombre: 'tecnico',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }]));
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('grupo', 1)
            .then(_ => queryInterface.bulkDelete('grupo', 2))
            .then(_ => queryInterface.bulkDelete('grupo', 3));
    }
};
