
module.exports=(sequelize, DataTypes )=>{
    const negUsuariosRoles =sequelize('negUsuariosRoles',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
     
    fechaInicio:{
        type:DataTypes.DATE,
        allowNull: false,
        field:'fecha_inicio'
    },
    fechaFin:{
        type:DataTypes.DATE,
        allowNull: false,
        field:'fecha_fin'
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

    negUsuariosRoles.asociar=(modelos)=>{
    modelos.negUsuariosRoles.hasMany(modelos.negUsuarios,{
        as: 'neg_usuarios',
        foreignkey:'id'
    });

    modelos.negUsuariosRoles.hasMany(modelos.segRoles,{
        as: 'neg_roles',
        foreignkey:'id'
    });
    };
    
    return negUsuariosRoles;

};