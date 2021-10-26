module.exports = (connection, DataTypes) => {
    const Adress = connection.define(
        "Adress",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        adress_type_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        zipcode: DataTypes.INTEGER,
        recipient: DataTypes.STRING(200),
        street: DataTypes.STRING(200),
        number: DataTypes.INTEGER,
        city: DataTypes.STRING(200),
        state: DataTypes.STRING(2),
        neighborhood: DataTypes.STRING(200),
        createdAt: DataTypes.DATE,

        
    },
    {
        tableName: "adresses", 
        timestamps: "true"

    }
);

Adress.associate = (models) => {
    Adress.belongsTo(models.AddressType, {
      foreignKey: "adress_type_id",
    });

    Adress.belongsTo(models.User, {
        foreignKey: "user_id",
      });

    Adress.hasMany(models.Order, {
      foreignKey: "address_id",
    });
    
  };

  

return Adress;

}