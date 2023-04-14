const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {
  static associate(models) {
    // Define the association between Tag and Product models
    Tag.belongsToMany(models.Product, {
      through: 'product_tag',
      foreignKey: 'tag_id',
    });
  }
}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);


module.exports = Tag;
