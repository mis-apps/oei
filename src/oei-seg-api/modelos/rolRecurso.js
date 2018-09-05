

module.exports=(sequelize, DataTypes)=>{

    const RolRecurso = sequelize.define('RolRecurso',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        lectura: DataType.BOOLEAN,
        creacion: DataType.BOOLEAN,
        modificacion: DataType.BOOLEAN,
        eliminacion: DataType.BOOLEAN,
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
        //schema:'core',
        tableName:'seg_roles_recursos',
        timestamps: false
    });

    RolRecurso.asociar=(modelos)=>{
        modelos.RolRecurso.hasMany(modelos.Rol,{
            as: 'rol',
            foreignkey:'id'
    });

    modelos.RolRecurso.hasMany(modelos.Recurso,{
        as: 'recurso',
        foreignkey:'id'
    });

    };
  

    return RolRecurso;

};