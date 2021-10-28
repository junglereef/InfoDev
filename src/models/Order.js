module.exports = (connection, DataTypes) => {
    const Order = connection.define(
        "Order",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: DataTypes.INTEGER,
        order_items_id: DataTypes.INTEGER,
        address_id: DataTypes.INTEGER,
        shipping_id: DataTypes.INTEGER,
        freight_price: DataTypes.INTEGER,
        total_order_price: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,

    },
    {
        tableName: "orders", 
        timestamps: "true"

    }
);

Order.associate = (models) => {
    
    Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });

    Order.hasMany(models.OrderItem, {
        foreignKey: "order_items_id",
        as: "itens",
      });
    
    Order.belongsTo(models.Adress, {
        foreignKey: "address_id",
        as: "address"
      });
  };

return Order;

}