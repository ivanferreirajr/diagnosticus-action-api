'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('diagnosis', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_cid: {
        type: Sequelize.STRING,
        allowNull: true,
        references: { model: 'cid', key: 'code' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_simulation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'simulations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      treatment: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('diagnosis');
  },
};
