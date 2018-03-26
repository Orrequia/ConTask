'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('Empresas', ['id_contrato'], {
          type: 'foreign key',
          name: 'fk_empresas_contratos',
          references: { //Required field
              table: 'Contratos',
              field: 'id'
          },
          onDelete: 'cascade', //Preguntar
          onUpdate: 'cascade'
      })
      .then(_ => queryInterface.addConstraint('Tiendas', ['id_empresa'], {
          type: 'foreign key',
          name: 'fk_tiendas_empresas',
          references: {
              table: 'Empresas',
              field: 'id'
          },
          onDelete: 'cascade', //Preguntar
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('Tiendas', ['id_provincia'], {
          type: 'foreign key',
          name: 'fk_tiendas_provincias',
          references: {
              table: 'Provincias',
              field: 'id'
          },
          onDelete: 'SET NULL',
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('Mochilas', ['id_tipoMochila'], {
          type: 'foreign key',
          name: 'fk_mochilas_tipoMochilas',
          references: {
              table: 'TipoMochilas',
              field: 'id'
          },
          onDelete: 'SET NULL',
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('Mochilas', ['id_tienda'], {
          type: 'foreign key',
          name: 'fk_mochilas_tiendas',
          references: {
              table: 'Tiendas',
              field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('Trabajadores', ['id_empresa'], {
          type: 'foreign key',
          name: 'fk_trabajadores_empresas',
          references: {
              table: 'Empresas',
              field: 'id'
          },
          onDelete: 'cascade', //Preguntar
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('Contratos', ['id_tipoContrato'], {
          type: 'foreign key',
          name: 'fk_contratos_tipocontratos',
          references: {
              table: 'TipoContratos',
              field: 'id'
          },
          onDelete: 'SET NULL',
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('Empresas', ['id_tipoEmpresa'], {
          type: 'foreign key',
          name: 'fk_contratos_tipocontratos',
          references: {
              table: 'TipoEmpresas',
              field: 'id'
          },
          onDelete: 'SET NULL',
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('TiendaTrabajadores', ['id_tienda'], {
          type: 'foreign key',
          name: 'fk_tiendaTrabajadores_tiendas',
          references: {
              table: 'Tiendas',
              field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
      }))
      .then(_ => queryInterface.addConstraint('TiendaTrabajadores', ['id_trabajador'], {
          type: 'foreign key',
          name: 'fk_tiendaTrabajadores_trabajadores',
          references: {
              table: 'Trabajadores',
              field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
      }));
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('Empresas', 'fk_empresas_contratos')
          .then(_ => queryInterface.removeConstraint('Tiendas', 'fk_tiendas_empresas'))
          .then(_ => queryInterface.removeConstraint('Tiendas', 'fk_tiendas_provincias'))
          .then(_ => queryInterface.removeConstraint('Mochilas', 'fk_mochilas_tipoMochilas'))
          .then(_ => queryInterface.removeConstraint('Mochilas', 'fk_mochilas_tiendas'))
          .then(_ => queryInterface.removeConstraint('Trabajadores', 'fk_trabajadores_empresas'))
          .then(_ => queryInterface.removeConstraint('Contratos', 'fk_contratos_tipocontratos'))
          .then(_ => queryInterface.removeConstraint('TiendaTrabajadores', 'fk_tiendaTrabajadores_tiendas'))
          .then(_ => queryInterface.removeConstraint('TiendaTrabajadores', 'fk_tiendaTrabajadores_trabajadores'));
  }
};
