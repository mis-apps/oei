

module.exports=(sequelize, DataTypes)=>{

    const Locutor = sequelize.define('Locutor',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        //primer_apellido:DataTypes.STRING,
        //segundo_apellido:DataTypes.STRING,
        //primer_nombre:DataTypes.STRING,
        //segundo_nombre:DataTypes.STRING,
        genero:DataTypes.STRING,
        fechaNacimiento:{
            type:DataTypes.DATE,
            allowNull: false,
            field:'fecha_nacimiento'
        },
        procedencia:DataTypes.STRING,
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
        tableName:'neg_locutor',
        timestamps: false
    });

    Locutor.asociar = (modelos) => {

    modelos.Locutor.belongsTo(modelos.ArchivoLocutor, {
         as: 'archivoLocutor',
         foreignkey: 'id'
    });

     modelos.Locutor.belongsTo(modelos.IdiomaLocutor, {
         as: 'idiomaLocutor',
         foreignkey: 'id'
     });

    }

    return Locutor;

};