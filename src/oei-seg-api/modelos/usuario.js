

module.exports=(sequelize, DataTypes)=>{

    const Usuario = sequelize.define('Usuario',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        idPersona:{
            type:DataTypes.INTEGER,
            allowNull:false,
            field:'id_persona'
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'user_name'
        },
        password:DataTypes.STRING,
        estado:DataTypes.STRING,

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
       // schema:'core',
        tableName:'usuario',
        timestamps: false
    });

    return Usuario;

};