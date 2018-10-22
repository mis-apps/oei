module.exports = (sequelize, DataTypes) => {

    const UsuarioRol = sequelize.define('UsuarioRol', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idRol: {
            type: DataTypes.INTEGER,
            field: 'id_rol'
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            field: 'id_usuario'

        },


        fechaInicio: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_inicio'
        },
        fechaFin: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_fin'
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_registro'
        },
        usuarioRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usuario_registro'
        },
        fechaModificacion: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_modificacion'
        },
        usuarioModificacion: {
            type: DataTypes.STRING,
            field: 'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN


    }, {
        //schema: 'core',
        tableName: 'seg_usuario_rol',
        timestamps: false
    });

    /*

    UsuarioRol.asociar=(modelos)=>{
    modelos.UsuarioRol.hasMany(modelos.Usuario,{
        as: 'usuario',
        foreignkey:'id'
    });

    modelos.UsuarioRol.hasMany(modelos.Rol,{
        as: 'rol',
        foreignkey:'id'
    });
    };
    */

    return UsuarioRol;

};