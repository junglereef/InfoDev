module.exports = (connection, DataTypes) => {
  const User = connection.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(200),
      email: DataTypes.STRING(200),
      password: DataTypes.STRING(256),
      user_type: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
    },
    {
      tableName: "users",
      timestamps: "true",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: "order_items_id",
      as: "pedido",
    });
  };

  return User;
};
