
module.exports=(sequelize, DataTypes )=>{

    const FraseArchivo =sequelize.define('FraseArchivo',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
        field:'fecha_modificacion'
    },
    usuarioModificacion:{
        type:DataTypes.STRING,
        field:'usuario_modificacion'
    },
    activo: DataTypes.BOOLEAN

    },{

    //schema: 'core',
    tableName:'neg_frase_archivo',
    timestamps: false
    });

/*
    FraseArchivo.asociar=(modelos)=>{

    modelos.FraseArchivo.hasMany(modelos.Frase,{
    as: 'frase',
    foreignkey:'id'
    });

    modelos.FraseArchivo.hasMany(modelos.Archivo,{
        as: 'archivo',
        foreignkey:'id'
    });

    };
*/

    return FraseArchivo;

};