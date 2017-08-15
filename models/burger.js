var sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var BurgerTables = sequelize.define("BurgerTables", {
   
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },  
  });
  return BurgerTables;
};
