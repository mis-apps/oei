module.exports=(sequelize, DataTypes)=>{

    const Aplicacion = sequelize.define('Aplicacion',{
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        nombreCorto:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'nombre_corto'
        },
        nombreCompleto:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'nombre_completo'
        },
        alias:DataTypes.STRING,
        descripcion:DataTypes.STRING,
        fechaCreacion:{
            type:DataTypes.DATE,
            allowNull: false,
            field:'fecha_creacion'
        },
        usuarioCreacion:{
            type:DataTypes.STRING,
            allowNull:false,
            field:'usuario_creacion'
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
        tableName:'aplicacion',
        timestamps: false
    });

    return Aplicacion;

};
