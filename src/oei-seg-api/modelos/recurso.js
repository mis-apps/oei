

module.exports=(sequelize, DataTypes)=>{

    const Recurso = sequelize.define('Recurso',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        
        es_modulo:DataType.STRING,
        posicion:DataType.INTEGER,
        nombre:DataType.STRING,
        recurso:DataType.STRING,

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
        tableName:'recurso',
        timestamps: false
    });
    
    Recurso.asociar=(modelos)=>{
        modelos.Recurso.hasMany(modelos.Modulo,{
            as: 'modulo',
            foreignkey:'id'
    });
    };
  

    return Recurso;

};