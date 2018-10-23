module.exports = (sequelize, DataTypes) => {

    const RelacionArchivo = sequelize.define('RelacionArchivo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idArchivoOrigen: {
            type: DataTypes.INTEGER,
            field: 'id_archivo_origen'
        },
        idArchivoRelacionado: {
            type: DataTypes.INTEGER,
            field: 'id_archivo_relacionado'
        },
        descripcion:{
            type:DataTypes.INTEGER,
            allowNull:false,

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

    }, {
            //schema: 'core',
            tableName: 'neg_relacion_archivo',
            timestamps: false
        });


    RelacionArchivo.asociar=(modelos)=>{

        modelos.RelacionArchivo.belongsTo(modelos.Archivo, {
            as: 'archivo',
            foreignkey: {
                name: 'idArchivoOrigen',
                field:'id_archivo',
                allowNull: false
            }
        });

         modelos.RelacionArchivo.belongsTo(modelos.Archivo, {
             as: 'archivo',
             foreignkey: {
                 name: 'idArchivoRelacionado',
                 field: 'id_archivo',
                 allowNull: false
             }
         });

       
    };


    return RelacionArchivo;

};