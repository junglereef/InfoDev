module.exports = (connection, DataTypes) => {
  const OrderItem = connection.define(
    "OrderItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    },
    {
      tableName: "order_items",
      timestamps: "true",
    }
  );

  OrderItem.associate = (models) => {
    OrderItem.hasMany(models.Order, {
      foreignKey: "order_items_id",
      as: "pedido",
    });
  };

  return OrderItem;
};