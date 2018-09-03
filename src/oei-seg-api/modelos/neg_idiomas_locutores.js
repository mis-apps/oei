
module.exports=(sequelize, DataTypes )=>{
    const negIdiomasLocutores =sequelize('negIdiomasLocutores',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idioma:DataTypes.STRING,
    nativo:DataTypes.BOOLEAN, 
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
    schema: 'core',
    tableName:'neg_frases_archivos',
    timestamps: false
    });

    negAtributosArchivos.asociar=(modelos)=>{
    modelos.negIdiomasLocutores.hasMany(modelos.negLocutores,{
        as: 'neg_locutores',
        foreignkey:'id'
    });
    };
    
    return negIdiomasLocutores;

};