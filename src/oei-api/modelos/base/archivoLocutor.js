
module.exports=(sequelize, DataTypes )=>{
    const ArchivoLocutor = sequelize.define('ArchivoLocutor',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    idArchivo: {
       type: DataTypes.INTEGER,
       allowNull: false,
       field: 'id_archivo'
      },

     idLocutor: {
       type: DataTypes.INTEGER,
       allowNull: false,
       field: 'id_locutor'
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
    //schema: 'oei',
    tableName:'neg_archivo_locutor',
    timestamps: false
    });

    /*
    ArchivoLocutor.asociar=(modelos)=>{

    modelos.ArchivoLocutor.belongsTo(modelos.Archivo, {
         as: 'archivo',
             foreignkey: {
                 name: 'idArchivo',
                 field: 'id_archivo',
                 allowNull: false
             }
    });

    modelos.ArchivoLocutor.belongsTo(modelos.Locutor, {
        as: 'locutor',
        foreignkey: {
            name: 'idLocutor',
            field: 'id_locutor',
            allowNull: false
        }
    });


    };
    */

    return ArchivoLocutor;

};