module.exports = (sequelize, DataTypes) => {

    const RelacionArchivo = sequelize.define('RelacionArchivo', {
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
            //schema: 'core',
            tableName: 'neg_relaciones_archivo',
            timestamps: false
        });

        RelacionArchivo.asociar=(modelos)=>{

            modelos.RelacionArchivo.hasMany(modelos.Archivo,{
            as: 'archivo',
            foreignkey:'id'
            });

            modelos.RelacionArchivo.hasMany(modelos.Archivo,{
                as: 'archivo',
                foreignkey:'id'
            });

        };

    return RelacionArchivo;

};