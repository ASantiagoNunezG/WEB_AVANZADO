'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ordencompra', [
      {
        nroordenc: 1001,
        fechaemision: new Date('2024-10-06'),
        situacion: 'Pendiente',
        total: 150.00,
        codlab: 1, 
        nrofacturaprov: 5001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nroordenc: 1002,
        fechaemision: new Date('2024-10-07'),
        situacion: 'Completado',
        total: 250.00,
        codlab: 2, 
        nrofacturaprov: 5002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nroordenc: 1003,
        fechaemision: new Date('2024-10-07'),
        situacion: 'Pendiente',
        total: 350.00,
        codlab: 2, 
        nrofacturaprov: 5003,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nroordenc: 1004,
        fechaemision: new Date('2024-10-07'),
        situacion: 'Cancelado',
        total: 50.00,
        codlab: 2, 
        nrofacturaprov: 5004,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ordencompra', null, {});
  }
};
