module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Persona', [
      {
        nomCli: 'Abraham',
        apeCli: 'Nuñez',
        dirCli: 'Santa Anita',
        dniCli: '23459787',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Persona', null, {});
  },
};