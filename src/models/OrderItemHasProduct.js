module.exports = (connection, DataTypes) => {
    const OrderItemHasProduct = connection.define(
        "OrderItemHasProduct",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: DataTypes.INTEGER,
        order_items_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,

    },
    {
        tableName: "order_items_has_product", 
        timestamps: "true"

    }
);

OrderItemHasProduct.associate = (models) => {
  
  OrderItemHasProduct.belongsTo(models.OrderItem, {
      foreignKey: "order_items_id",
    });
  
  OrderItemHasProduct.belongsTo(models.Product, {
      foreignKey: "product_id",
    });
  };

return OrderItemHasProduct;

}