module.exports=(sequelize, DataTypes)=>{

    const Modulo = sequelize.define('Modulo',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },

        posicion:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        nombre:{
            type:DataTypes.STRING,
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
            allowNull: false,
            field:'fecha_modificacion'
        },
        usuarioModificacion:{
            type:DataTypes.STRING,
            field:'seg_usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN
    },{
        //schema:'core',
        tableName:'modulo',
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