
module.exports=(sequelize, DataTypes )=>{

    const AtributoArchivo =sequelize.define('AtributoArchivo',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    atributo:DataTypes.STRING,
    valor:DataTypes.STRING,
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
    tableName:'atributo_archivo',
    timestamps: false
    });
    
    AtributoArchivo.asociar=(modelos)=>{

    modelos.AtributoArchivo.hasMany(modelos.Archivo,{
        as: 'archivo',
        foreignkey:'id'
    });
    
    };

    return AtributoArchivo;

};