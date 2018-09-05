module.exports = (sequelize, DataTypes) => {

    const ArchivoAplicacion = sequelize.define('ArchivoAplicacion', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        aplicacion: DataTypes.STRING,
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
        },
        {
            //schema: 'oei',
            tableName: 'archivo_aplicacion',
            timestamps: false
        });

        ArchivoAplicacion.asociar=(modelos)=>{
            modelos.ArchivoAplicacion.hasMany(modelos.Archivo,{
            as: 'archivo',
            foreignkey:'id'
            });
        };

    return ArchivoAplicacion;

};
