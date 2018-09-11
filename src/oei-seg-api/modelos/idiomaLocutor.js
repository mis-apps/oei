
module.exports=(sequelize, DataTypes )=>{
    const IdiomaLocutor =sequelize.define('IdiomaLocutor',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idioma:{
        type:DataTypes.STRING,
        allowNull:false
    },
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
    tableName:'idioma_locutor',
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