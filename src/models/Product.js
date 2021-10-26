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
        lenght: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,

    },
    {
        tableName: "product", 
        timestamps: "true"

    }
);

return Product;

}