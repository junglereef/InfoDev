module.exports = (sequelize,DataTypes)=>{


const Cart = sequelize.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
},
{
    tableName:'cart'
}
);

return Cart
};

