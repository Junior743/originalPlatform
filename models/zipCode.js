"use strict";

module.exports = (sequelize, DataTypes) => {
  const ZipCodes = sequelize.define("ZipCodes",
    {
      zipCode: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      logradouro: {
        type: DataTypes.STRING,
      },
      complemento: {
        type: DataTypes.STRING,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      localidade: {
        type: DataTypes.STRING,
      },
      uf: {
        type: DataTypes.STRING,
      }
    }, {});
  // ZipCodes.associate = function(models) {
  //   // associations can be defined here
  //   ZipCodes.belongsTo(models.Clients, {
  //     foreignKey: "email",
  //     onDelete: "CASCADE"
  //   });
  // };
  return ZipCodes;
};
