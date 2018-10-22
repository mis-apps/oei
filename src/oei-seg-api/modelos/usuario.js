

module.exports=(sequelize, DataTypes)=>{

    const Usuario = sequelize.define('Usuario',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        }, 
        idPersona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_persona'
        },
        username:{
            type:DataTypes.STRING,
            allowNull:true
        },
        password:DataTypes.STRING,
        estado:{
            type:DataTypes.STRING,
            allowNull: true,
            field:'estado'
        },

        fechaRegistro:{
            type:DataTypes.DATE,
            allowNull: true,
            field:'fecha_modificacion'
        },
        usuarioRegistro:{
            type:DataTypes.STRING,
            allowNull:true,
            field:'usuario_creacion'
        },
        fechaModificacion:{
            type:DataTypes.DATE,
            field:'fecha_creacion'
        },
        usuarioModificacion:{
            type:DataTypes.STRING,
            field:'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN
    },{
       // schema:'core',
        tableName:'seg_usuario',
        timestamps: false
    });
/*
     Usuario.asociar = (modelos) => {

         modelos.Usuario.belongsTo(modelos.Persona, {
             as: 'persona',
             foreignkey: {
                 fieldName: 'idPersona'
             }
         });

     };
*/
    return Usuario;

};