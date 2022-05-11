'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('emergency_cases', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_classroom: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'classrooms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_patient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'patients', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_exam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'exams', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_complaint: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'complaints', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      patient_lifetime: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      exam_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      simulation_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
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
    return queryInterface.dropTable('emergency_cases');
  },
};
