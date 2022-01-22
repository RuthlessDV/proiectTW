const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Student = sequelize.define(
  "student",
  {
    idStudent: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
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
    grupa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4, 4],
      },
    },
    idProiect: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "Student",
  }
);

module.exports = Student;
