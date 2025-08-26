const { DataTypes } = require("sequelize");
const sequelize = require("./db.js");
const Sneakers = sequelize.define("sneakers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Sneakers.sync({ force: false })
  .then(() => {
    console.log("Table created or already existed");
  })
  .catch((error) => {
    console.log("Error creating table", error);
  });

module.exports = Sneakers;
