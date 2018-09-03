module.exports = (sequelize, DataTypes) => {

    const negRelacionesArchivos = sequelize.define('negRelacionesArchivos', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        descripcion:DataTypes.INTEGER,
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

    }, {
            schema: 'core',
            tableName: 'neg_relaciones_archivo',
            timestamps: false
        });

        negRelacionesArchivos.asociar=(modelos)=>{

            modelos.negRelacionesArchivos.hasMany(modelos.negArchivos,{
            as: 'neg_archivos',
            foreignkey:'id'
            });

            modelos.negFrasesArchivos.hasMany(modelos.negArchivos,{
                as: 'neg_archivos',
                foreignkey:'id'
            });

        };

    return negRelacionesArchivos;

};