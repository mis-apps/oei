module.exports = (sequelize, DataTypes) => {

    const negPalabrasArchivos = sequelize.define('negPalabrasArchivos', {
        id: {
            type: DataTypes.INTEGER,
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

    }, {
            schema: 'core',
            tableName: 'neg_relaciones_archivo',
            timestamps: false
        });

        negPalabrasArchivos.asociar=(modelos)=>{

            modelos.negPalabrasArchivos.hasMany(modelos.negArchivos,{
            as: 'neg_archivos',
            foreignkey:'id'
            });

            modelos.negPalabrasArchivos.hasMany(modelos.negPalabras,{
                as: 'neg_palabras',
                foreignkey:'id'
            });

        };
        

    return negPalabrasArchivos;

};