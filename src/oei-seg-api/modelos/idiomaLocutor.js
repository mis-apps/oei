
module.exports=(sequelize, DataTypes )=>{
    const IdiomaLocutor =sequelize('IdiomaLocutor',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idioma:DataTypes.STRING,
    nativo:DataTypes.BOOLEAN, 
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
    //schema: 'core',
    tableName:'frase_archivo',
    timestamps: false
    });

    IdiomaLocutor.asociar=(modelos)=>{
    modelos.IdiomaLocutor.hasMany(modelos.Locutor,{
        as: 'locutor',
        foreignkey:'id'
    });
    };
    
    return IdiomaLocutor;

};