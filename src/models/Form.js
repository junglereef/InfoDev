module.exports = (sequelize,DataTypes)=>{

    const Form = sequelize.define('Form',
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            message:DataTypes.TEXT,
            
            //Timestamps

            createdAt:{
                field:'create_at',
                type:DataTypes.DATE
            },
            updatedAt:{
                field:'update_at',
                type:DataTypes.DATE
            },
        },
        
        {
            tableName:'form'
        }
    )

    return Form
};