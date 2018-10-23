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


    Archivo.asociar = (modelos) => {

        modelos.Archivo.hasMany(modelos.FraseArchivo, {
            as: 'fraseArchivo',
            foreignkey: 'idArchivo'
        });

        modelos.Archivo.hasMany(modelos.ArchivoAplicacion, {
              as: 'archivoAplicacion',
              foreignkey: 'idArchivo'
        });

        modelos.Archivo.hasMany(modelos.RelacionArchivo, {
              as: 'relacionArchivo',
              foreignkey: 'idArchivoOrigen'
        });

        modelos.Archivo.hasMany(modelos.RelacionArchivo, {
              as: 'relacionArchivo',
              foreignkey: 'idArchivoRelacionado'
        });

        modelos.Archivo.hasMany(modelos.AtributoArchivo, {
              as: 'atributoArchivo',
              foreignkey: 'idArchivo'
        });

         modelos.Archivo.hasMany(modelos.ArchivoLocutor, {
             as: 'archivoLocutor',
             foreignkey: 'idLocutor'
         });

        modelos.Archivo.hasMany(modelos.PalabraArchivo, {
             as: 'palabraArchivo',
             foreignkey: 'idPalabra'
        });


    };



    return Archivo;
};