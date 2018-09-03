

module.exports=(sequelize, DataTypes)=>{

    const segRolesRecursos = sequelize.define('segRolesRecursos',{
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
        schema:'core',
        tableName:'seg_roles_recursos',
        timestamps: false
    });

    segRolesRecursos.asociar=(modelos)=>{
        modelos.segRolesRecursos.hasMany(modelos.segRoles,{
            as: 'seg_roles',
            foreignkey:'id'
    });

    modelos.segRolesRecursos.hasMany(modelos.segRecursos,{
        as: 'seg_recursos',
        foreignkey:'id'
    });

    };
  

    return segRolesRecursos;

};