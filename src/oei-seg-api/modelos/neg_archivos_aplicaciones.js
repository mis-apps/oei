module.exports = (sequelize, DataTypes) => {

    const negArchivosAplicaciones = sequelize.define('negArchivosAplicaciones', {
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
            tableName: 'neg_archivos_aplicaciones',
            timestamps: false
        });

        negFrasesArchivos.asociar=(modelos)=>{
            modelos.negFrasesArchivos.hasMany(modelos.negArchivos,{
            as: 'neg_archivos',
            foreignkey:'id'
            });
        };

    return negArchivosAplicaciones;

};
