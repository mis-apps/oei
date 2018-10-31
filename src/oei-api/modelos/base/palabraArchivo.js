module.exports = (sequelize, DataTypes) => {

    const PalabraArchivo = sequelize.define('PalabraArchivo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idPalabra: {
              type: DataTypes.INTEGER,
              allowNull: false,
              field: 'id_palabra'
        },

        idArchivo: {
              type: DataTypes.INTEGER,
              allowNull: false,
              field: 'id_archivo'
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
            //schema: 'core',
            tableName: 'neg_palabra_archivo',
            timestamps: false
        });

        /*
        PalabraArchivo.asociar=(modelos)=>{

            modelos.PalabraArchivo.belongsTo(modelos.Archivo, {
            as: 'archivo',
            foreignkey: {
                name: 'idArchivo',
                field: 'id_archivo',
                allowNull: false
            }
            });

            modelos.PalabraArchivo.belongsTo(modelos.Palabra, {
                as: 'palabra',
                foreignkey: {
                    name: 'idPalabra',
                    field: 'id_palabra',
                    allowNull: false
                }
            });

        };
        */


    return PalabraArchivo;

};