

module.exports=(sequelize, DataTypes)=>{

    const RolRecurso = sequelize.define('RolRecurso',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        lectura: {
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        creacion:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        modificacion: {
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        eliminacion: {
            type:DataTypes.BOOLEAN,
            allowNull:false
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
            allowNull:false,
            field:'fecha_modificacion'
        },
        usuarioModificacion:{
            type:DataTypes.STRING,
            field:'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN
    },{
        //schema:'core',
        tableName:'rol_recurso',
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