'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_doctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hda: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Did not answer',
      },
      marital_status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      occupation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      personal_background: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      family_background: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      psychological_history: {
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
    return queryInterface.dropTable('patients');
  },
};
