'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Tiendas', 'id_pronvicia', Sequelize.INTEGER)
          .then(_ => queryInterface.addColumn('Tiendas', 'id_empresa', Sequelize.INTEGER))
          .then(_ => queryInterface.removeColumn('Tiendas', 'provincia'));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Tiendas', 'id_pronvicia')
          .then(_ => queryInterface.removeColumn('Tiendas', 'id_empresa'))
          .then(_ => queryInterface.addColumn('Tiendas', 'provincia', Sequelize.INTEGER));
  }
};
