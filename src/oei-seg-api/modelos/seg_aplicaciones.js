

module.exports=(sequelize, DataTypes)=>{

    const segAplicaciones = sequelize.define('segAplicaciones',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        nombreCorto:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'nombre_corto'
        },
        nombreCompleto:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'nombre_completo'
        },
        alias:DataTypes.STRING,
        descripcion:DataType.STRING,
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
        schema:'core',
        tableName:'seg_aplicaciones',
        timestamps: false
    });
    
    return segAplicaciones;

};