

module.exports=(sequelize, DataTypes)=>{

    const Palabra = sequelize.define('Palabra',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        idioma:{
            type:DataTypes.STRING,
            allowNull:false
        },
        palabra:{
            type:DataTypes.STRING,
            allowNull:false
        },
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
            allowNull:false,
            field:'fecha_modificacion'
        },
        usuarioModificacion:{
            type:DataTypes.STRING,
            field:'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN
    },{
        //schema:'core',
        tableName:'palabra',
        timestamps: false
    });

    return Palabra;

};