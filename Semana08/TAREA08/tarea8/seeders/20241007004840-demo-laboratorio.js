'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('laboratorio', [{
      codlab: 1,
      razonsocial: 'Laboratorio A',
      direccion: 'Santa Anita 1',
      telefono: '923456789',
      email: 'labpreatty@labA.com',
      contacto: 'Nuñez Abraham',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      codlab: 2,
      razonsocial: 'Laboratorio B',
      direccion: 'Santa Anita 2',
      telefono: '987654321',
      email: 'labcool@labB.com',
      contacto: 'Santiago Garcia',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('laboratorio', null, {});

  }
};
