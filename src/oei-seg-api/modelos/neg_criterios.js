module.exports=(sequelize,DataTypes)=>{
    const negCreterios = sequelize.define('negCreterios',{
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        criterio:DataTypes.INTEGER,
        codigo:DataTypes.STRING,
        valor:DataTypes.STRING,
        fechaRegistro:{
            type:DataTypes.DATE,
            allowNull: false,
            field:'fecha_registro'
        },
        usuarioRegistro:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'usuario_registro'
        },
        fechaModificacion:{
            type:DataTypes.DATE,
            field:'fecha_modificacion'
        },
        usuarioModificacion:{
            type:DataTypes.STRING,
            field:'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN
    },{
        schema:'core',
        tableName:'neg_criterios',
        timestamp:false

    });
    return negCreterios;
};