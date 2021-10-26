module.exports = (connection, DataTypes) => {
    const ProductHasCategory = connection.define(
        "ProductHasCategory",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,

    },
    {
        tableName: "product_has_category", 
        timestamps: "true"

    }
);

ProductHasCategory.associate = (models) => {
    ProductHasCategory.belongsTo(models.Product, {
      foreignKey: "product_id",
    });
    ProductHasCategory.belongsTo(models.Category, {
      foreignKey: "category_id",
    });
  };

return ProductHasCategory;

}