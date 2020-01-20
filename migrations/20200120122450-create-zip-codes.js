"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ZipCodes", {
      zipCode: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING,
      },
      complemento: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING,
      },
      localidade: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      clientEmail: {
        type: Sequelize.STRING,
        onDelete: "CASCADE",
        references: {
          model: "Clients",
          key: "email",
          as: "clientEmail"
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ZipCodes");
  }
};
