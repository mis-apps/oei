

module.exports=(sequelize, DataTypes)=>{

    const  Frase = sequelize.define('Frase',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        descripcion:DataTypes.STRING,
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
        tableName:'neg_frase',
        timestamps: false
    });

    /*
    Frase.asociar=(modelos)=>{

        modelos.Frase.belongsTo(modelos.FraseArchivo,{
            as:'fraseArchivo',
            foreignkey: 'id'
        });

    };
    */


    return Frase;

};