
module.exports=(sequelize, DataTypes )=>{
    const IdiomaLocutor =sequelize.define('IdiomaLocutor',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    idLocutor: {
         type: DataTypes.INTEGER,
         allowNull: false,
         field: 'id_locutor'
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
    tableName:'neg_idioma_locutor',
    timestamps: false
    });

    /*
    IdiomaLocutor.asociar=(modelos)=>{
    modelos.IdiomaLocutor.belongsTo(modelos.Locutor, {
        as: 'locutor',
        foreignkey: {
            name: 'idLocutor',
            field: 'id_locutor',
            allowNull: false
        }
    });

    };
    */


    return IdiomaLocutor;

};