module.exports=(sequelize,DataTypes)=>{
    const Archivo = sequelize.define('Archivo',{
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        tipoArchivo:{
            type:DataTypes.STRING,
            field:'tipo_archivo'
        },
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        fechaCreacionArchivo:{
            type:DataTypes.DATE,
            field:'fecha_creacion_archivo'
        },
        size:DataTypes.INTEGER,
        fileName:DataTypes.STRING,
        mimeType:DataTypes.STRING,
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
        //schema:'oei',
        tableName:'archivo',
        timestamp:false

    });
    return Archivo;
};