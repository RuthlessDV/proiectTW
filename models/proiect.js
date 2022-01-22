const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Proiect = sequelize.define(
  'proiect',
  {
    idProiect: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tema: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 50],
      },
    },
  },
  {
    tableName: 'Proiect',
  }
);

module.exports = Proiect;
