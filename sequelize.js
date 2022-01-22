const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/ProiectTW.db",
});

//sequelize.sync({ force: true }).then(() => {
//  console.log('Modelele au fost sincronizate');
//});

module.exports = sequelize;
