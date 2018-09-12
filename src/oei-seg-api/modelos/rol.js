

module.exports=(sequelize, DataTypes)=>{

    const Rol = sequelize.define('Rol',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descripcion:DataTypes.STRING,
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
        tableName:'seg_rol',
        timestamps: false
    });
    
    Rol.asociar=(modelos)=>{
        modelos.Rol.hasMany(modelos.Aplicacion,{
            as: 'aplicacion',
            foreignkey:'id'
    });
    };
  

    return Rol;

};