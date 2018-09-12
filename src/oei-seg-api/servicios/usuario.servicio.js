module.exports = (servicios, modelos) => {

    const UsuarioServicio = {};

    // metodos Repository
    UsuarioServicio.listar = (params) => {
        return modelos.Usuario.findAll(UsuarioServicio.filtro(params));
    };

    UsuarioServicio.encontrarUno = (params) => {
        return modelos.Usuario.findOne(UsuarioServicio.filtro(params));
    };

    UsuarioServicio.construir = (params) => {
        return modelos.Usuario.build(params);
    };

    UsuarioServicio.guardar = (Usuario, params) => {
        if (params) {
            Usuario.set(params);
        }
        return Usuario.save();
    };

    UsuarioServicio.destruir = (Usuario) => {
        return Usuario.destroy();
    };

    UsuarioServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    UsuarioServicio.crear = (params) => {
        return UsuarioServicio.guardar(UsuarioServicio.construir(params), params);
    };

    UsuarioServicio.actualizar = (id, params) => {
        return UsuarioServicio.obtener(id)
            .then((Usuario) => {
                return UsuarioServicio.guardar(Usuario, params);
            });
    };

    UsuarioServicio.obtener = (id) => {
        return UsuarioServicio.encontrarUno({ id })
            .then((Usuario) => {
                if (!Usuario) throw new Error('No se ha encontrado');
                return Usuario;
            });
    }

    UsuarioServicio.eliminar = (id) => {
        return UsuarioServicio.obtener(id)
            .then(UsuarioServicio.destruir);
    };

    return UsuarioServicio;
};
