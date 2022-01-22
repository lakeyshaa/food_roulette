'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Anna',
        lastName: 'Anderson',
        email: 'anna@email.com',
        password: 'anna1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Billy',
        lastName: 'Bailey',
        email: 'billy@email.com',
        password: 'billy1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Carlos',
        lastName: 'Cunningham',
        email: 'carlos@email.com',
        password: 'carlos1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'David',
        lastName: 'Dixon',
        email: 'david@email.com',
        password: 'david1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Eunice',
        lastName: 'Edwards',
        email: 'eunice@email.com',
        password: 'eunice1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};