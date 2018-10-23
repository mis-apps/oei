
module.exports=(sequelize, DataTypes )=>{

    const FraseArchivo =sequelize.define('FraseArchivo',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    idArchivo:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_archivo'
    },

    idFrase: {
       type: DataTypes.INTEGER,
       allowNull: false,
       field: 'id_frase'
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


    FraseArchivo.asociar=(modelos)=>{

    modelos.FraseArchivo.belongsTo(modelos.Frase, {
    as: 'frase',
    foreignkey:{
        name:'idFrase',
        field: 'id_frase',
        allowNull: false}
    });

    modelos.FraseArchivo.belongsTo(modelos.Archivo, {
        as: 'archivo',
        foreignkey: {
            name: 'idArchivo',
            field: 'id_archivo',
            allowNull: false}
    });

    };


    return FraseArchivo;

};