module.exports = (connection, DataTypes) => {
    const Product = connection.define(
        "Product",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING(200),
        inventory: DataTypes.INTEGER,
        unit_price: DataTypes.FLOAT,
        offer: DataTypes.BOOLEAN,
        offer_price: DataTypes.FLOAT,
        description: DataTypes.TEXT('long'),    
        short_description: DataTypes.STRING(300),
        image: DataTypes.STRING(300),
        manufacturer_id: DataTypes.INTEGER,
        width: DataTypes.INTEGER,
        height: DataTypes.INTEGER,
        length: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,

        
            

    },
    {
        tableName: "products", 
        timestamps: "true"

    }
);

Product.associate = (models) => {
    Product.belongsTo(models.Manufacturer, {
      foreignKey: "manufacturer_id",
    });

    Product.hasMany(models.OrderItem, {
      foreignKey: "product_id",
    });
    Product.hasMany(models.ProductHasCategory, {
        foreignKey: "product_id",
      });
  };

return Product;

}