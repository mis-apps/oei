
module.exports=(sequelize, DataTypes )=>{
    const ArchivoLocutor = sequelize.define('ArchivoLocutor',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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

    ArchivoLocutor.asociar=(modelos)=>{
        
    modelos.ArchivoLocutor.hasMany(modelos.Archivo,{
        as: 'archivo',
        foreignkey:'id'
    });

    modelos.ArchivoLocutor.hasMany(modelos.Locutor,{
        as: 'locutor',
        foreignkey:'id'
    });


    };

  
    return ArchivoLocutor;

};