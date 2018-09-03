

module.exports=(sequelize, DataTypes)=>{

    const segRoles = sequelize.define('segRoles',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descripcion:DataType.STRING,
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
        tableName:'seg_roles',
        timestamps: false
    });
    
    segRoles.asociar=(modelos)=>{
        modelos.segRoles.hasMany(modelos.segAplicaciones,{
            as: 'seg_aplicaciones',
            foreignkey:'id'
    });
    };
  

    return segRoles;

};