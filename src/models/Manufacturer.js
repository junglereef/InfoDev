module.exports = (connection, DataTypes) => {
    const Manufacturer = connection.define(
        "Manufacturer",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING(200),
        createdAt: DataTypes.DATE,

    },
    {
        tableName: "manufacturers", 
        timestamps: "true"

    }
);

Manufacturer.associate = (models) => {
  
    
    Manufacturer.hasMany(models.Product, {
        foreignKey: "manufacturer_id",
      });
  };

return Manufacturer;

}