
module.exports=(sequelize, DataTypes )=>{
    const negArchivosLocutores=sequelize('negArchivosLocutores',{
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
    //schema: 'oei',
    tableName:'neg_frases_archivos',
    timestamps: false
    });

    negArchivosLocutores.asociar=(modelos)=>{
    modelos.negArchivosLocutores.hasMany(modelos.negArchivos,{
        as: 'neg_archivos',
        foreignkey:'id'
    });
    };

    negArchivosLocutores.asociar=(modelos)=>{
        modelos.negArchivosLocutores.hasMany(modelos.negLocutores,{
            as: 'neg_locutores',
            foreignkey:'id'
        });
        };

    return negArchivosLocutores;

};