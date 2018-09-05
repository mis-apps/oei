
module.exports=(sequelize, DataTypes )=>{
    const UsuarioRol =sequelize('UsuarioRol',{
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
    //schema: 'core',
    tableName:'usuario_rol',
    timestamps: false
    });

    UsuarioRol.asociar=(modelos)=>{
    modelos.UsuarioRol.hasMany(modelos.Usuario,{
        as: 'usuario',
        foreignkey:'id'
    });

    modelos.UsuarioRol.hasMany(modelos.Rol,{
        as: 'rol',
        foreignkey:'id'
    });
    };

    return UsuarioRol;

};