'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'classroom', {
      type: Sequelize.INTEGER,
      references: { model: 'classrooms', key: 'id' },
      allowNull: true,
      onUpdate: 'CASCADE',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'classroom');
  },
};
