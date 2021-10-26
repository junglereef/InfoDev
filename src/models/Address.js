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
        number: DataTypes.INTEGER(15),
        city: DataTypes.STRING(200),
        state: DataTypes.STRING(2),
        neighborhood: DataTypes.STRING(200),
        createdAt: DataTypes.DATE,

        
    },
    {
        tableName: "adress", 
        timestamps: "true"

    }
);

return Adress;

}