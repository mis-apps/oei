

module.exports=(sequelize, DataTypes)=>{

    const Recurso = sequelize.define('Recurso',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        
        es_modulo:DataTypes.STRING,
        posicion:DataTypes.INTEGER,
        nombre:DataTypes.STRING,
        recurso:DataTypes.STRING,

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