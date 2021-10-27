module.exports = (connection, DataTypes) => {
  const AddressType = connection.define(
    "AddressType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address_type: DataTypes.STRING(15),
    },
    {
      tableName: "address_type",
      timestamps: "true",
    }
  );

  AddressType.associate = (models) => {
    AddressType.hasMany(models.Adress, {
      foreignKey: "adress_type_id",
      as: "adresses",
    });
  };

  return AddressType;
};
