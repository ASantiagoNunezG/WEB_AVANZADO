'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ordencompra', {
      nroordenc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fechaemision: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      situacion: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.DOUBLE
      },
      codlab: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'laboratorio',
          key: 'codlab',
        }
      },
      nrofacturaprov: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ordencompra');
  }
};