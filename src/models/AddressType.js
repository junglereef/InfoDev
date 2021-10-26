module.exports = (connection, DataTypes) => {
    const AddressType = connection.define(
        "AddressType",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        address_type: DataTypes.STRING(15),
        createdAt: DataTypes.DATE,

    },
    {
        tableName: "address_type", 
        timestamps: "true"

    }
);

AddressType.associate = (models) => {
  
    
    AddressType.hasMany(models.Address, {
        foreignKey: "address_type_id",
      });
  };

return AddressType;

}