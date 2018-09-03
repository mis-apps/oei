
module.exports=(sequelize, DataTypes )=>{
    const negAtributosArchivos =sequelize('negAtributosArchivos',{
    id:{
        type:DataTypes.INTEGER,
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
    tableName:'neg_frases_archivos',
    timestamps: false
    });

    negAtributosArchivos.asociar=(modelos)=>{
    modelos.negAtributosArchivos.hasMany(modelos.negArchivos,{
        as: 'neg_archivos',
        foreignkey:'id'
    });
    };

    return negAtributosArchivos;

};