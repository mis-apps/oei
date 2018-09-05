

module.exports=(sequelize, DataTypes)=>{

    const Palabra = sequelize.define('Palabra',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        idioma:DataTypes.STRING,
        palabra: DataType.STRING,
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
        //schema:'core',
        tableName:'neg_palabra',
        timestamps: false
    });

    return Palabra;

};