'use strict';

module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Clients.associate = function(models) {
    // associations can be defined here
    Clients.hasMany(models.ZipCodes, {
      foreignKey: 'clientEmail'
    })
  };
  return Clients;
};