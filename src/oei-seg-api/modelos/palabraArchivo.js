module.exports = (sequelize, DataTypes) => {

    const PalabraArchivo = sequelize.define('PalabraArchivo', {
        id: {
            type: DataTypes.INTEGER,
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

    }, {
            //schema: 'core',
            tableName: 'neg_palabra_archivo',
            timestamps: false
        });

        PalabraArchivo.asociar=(modelos)=>{

            modelos.PalabraArchivo.hasMany(modelos.Archivo,{
            as: 'archivo',
            foreignkey:'id'
            });

            modelos.PalabraArchivo.hasMany(modelos.Palabra,{
                as: 'palabra',
                foreignkey:'id'
            });

        };
        

    return PalabraArchivo;

};