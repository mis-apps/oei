module.exports=(sequelize,DataTypes)=>{
    const Archivo = sequelize.define('Archivo',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
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
        mimeType:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'mime_type'
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
            field:'fecha_modificacion'
        },
        usuarioModificacion:{
            type:DataTypes.STRING,
            field:'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN

    },{
        //schema:'oei',
        tableName:'neg_archivo',
        timestamp:false

    });

/*
    Archivo.asociar = (modelos) => {

        modelos.Archivo.belongsTo(modelos.FraseArchivo, {
            as: 'fraseArchivo',
            foreignkey: 'id'
        });

        modelos.Archivo.belongsTo(modelos.ArchivoAplicacion, {
              as: 'archivoAplicacion',
              foreignkey: 'id'
        });

        modelos.Archivo.belongsTo(modelos.RelacionArchivo, {
              as: 'archivoOrigen',
              foreignkey: 'idArchivoOrigen'
        });

        modelos.Archivo.belongsTo(modelos.RelacionArchivo, {
              as: 'ArchivoRelacionados',
              foreignkey: 'idArchivoRelacionado'
        });

        modelos.Archivo.belongsTo(modelos.AtributoArchivo, {
              as: 'atributoArchivo',
              foreignkey: 'id'
        });

         modelos.Archivo.belongsTo(modelos.ArchivoLocutor, {
             as: 'archivoLocutor',
             foreignkey: 'id'
         });

        modelos.Archivo.belongsTo(modelos.PalabraArchivo, {
             as: 'palabraArchivo',
             foreignkey: 'id'
        });


    };

*/

    return Archivo;
};