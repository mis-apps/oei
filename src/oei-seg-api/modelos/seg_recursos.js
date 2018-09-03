

module.exports=(sequelize, DataTypes)=>{

    const segRecursos = sequelize.define('segRecursos',{
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
        schema:'core',
        tableName:'seg_recursos',
        timestamps: false
    });
    
    segRecursos.asociar=(modelos)=>{
        modelos.segRecursos.hasMany(modelos.segModulos,{
            as: 'seg_modulos',
            foreignkey:'id'
    });
    };
  

    return segRecursos;

};