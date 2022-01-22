const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Profesor = sequelize.define(
  'profesor',
  {
    nume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 20],
      },
    },
    prenume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 20],
      },
    },
  },
  {
    tableName: 'Profesor',
  }
);

module.exports = Profesor;
