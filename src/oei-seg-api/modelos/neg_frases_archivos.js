
module.exports=(sequelize, DataTypes )=>{
    const negFrasesArchivos =sequelize('negFrasesArchivos',{
    id:{
        type:DataTypes.INTEGER,
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
    schema: 'core',
    tableName:'neg_frases_archivos',
    timestamps: false
    });

    negFrasesArchivos.asociar=(modelos)=>{

    modelos.negFrasesArchivos.hasMany(modelos.negFrases,{
    as: 'neg_frases',
    foreignkey:'id'
    });

    modelos.negFrasesArchivos.hasMany(modelos.negArchivos,{
        as: 'neg_archivos',
        foreignkey:'id'
    });

    };

    return negFrasesArchivos;

};