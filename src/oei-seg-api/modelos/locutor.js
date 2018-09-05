

module.exports=(sequelize, DataTypes)=>{

    const Locutor = sequelize.define('Locutor',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        primer_apellido:DataTypes.STRING,
        segundo_apellido:DataTypes.STRING,
        primer_nombre:DataTypes.STRING,
        segundo_nombre:DataTypes.STRING,
        genero:DataTypes.STRING,
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
        //schema:'oei',
        tableName:'locutor',
        timestamps: false
    });

    return Locutor;

};