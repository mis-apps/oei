module.exports=(sequelize, DataTypes)=>{

    const Modulo = sequelize.define('Modulo',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },

        posicion:DataType.INTEGER,
        nombre:DataType.STRING,

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
        tableName:'seg_modulos',
        timestamps: false
    });

    Modulo.asociar=(modelos)=>{
        modelos.Modulo.hasMany(modelos.Aplicacion,{
            as: 'aplicacion',
            foreignkey:'id'
    });
    };
  

    return Modulo;

};