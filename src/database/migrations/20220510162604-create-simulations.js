'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('simulations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_student: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_emergency_case: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'emergency_cases', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      simulation_total_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      simulation_start: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      simulation_end: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      timeout: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      observation: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('simulations');
  },
};
