module.exports = (sequelize, DataTypes) => {

    const ArchivoAplicacion = sequelize.define('ArchivoAplicacion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idArchivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_archivo'
        },
        aplicacion: DataTypes.STRING,
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
            tableName: 'neg_archivo_aplicacion',
            timestamps: false
        });

        /*
        ArchivoAplicacion.asociar=(modelos)=>{
            modelos.ArchivoAplicacion.belongsTo(modelos.Archivo, {
            as: 'archivo',
            foreignkey:{
                name:'idArchivo',
                field:'id_Archivo',
                allow:false
                }
            });
        };
        */

        return ArchivoAplicacion;

    };
