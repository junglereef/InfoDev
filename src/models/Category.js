module.exports = (connection, DataTypes) => {
    const Category = connection.define(
        "Category",
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
        tableName: "categories", 
        timestamps: "true"

    }
);

Category.associate = (models) => {
  
    
    Category.hasMany(models.ProductHasCategory, {
        foreignKey: "category_id",
      });
  };

return Category;

}