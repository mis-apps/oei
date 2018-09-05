module.exports = (servicios, modelos) => {

    const usuarioRolServicio = {};

    // metodos Repository
    usuarioRolServicio.listar = (params) => {
        return modelos.usuarioRol.findAll(usuarioRolServicio.filtro(params));
    };

    usuarioRolServicio.encontrarUno = (params) => {
        return modelos.usuarioRol.findOne(usuarioRolServicio.filtro(params));
    };

    usuarioRolServicio.construir = (params) => {
        return modelos.usuarioRol.build(params);
    };

    usuarioRolServicio.guardar = (usuarioRol, params) => {
        if (params) {
            usuarioRol.set(params);
        }
        return usuarioRol.save();
    };

    usuarioRolServicio.destruir = (usuarioRol) => {
        return usuarioRol.destroy();
    };

    usuarioRolServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    usuarioRolServicio.crear = (params) => {
        return usuarioRolServicio.guardar(usuarioRolServicio.construir(params));
    };

    usuarioRolServicio.actualizar = (id, params) => {
        return usuarioRolServicio.obtener(id)
            .then((usuarioRol) => {
                return usuarioRolServicio.guardar(usuarioRol, params);
            });
    };

    usuarioRolServicio.obtener = (id) => {
        return usuarioRolServicio.encontrarUno({ id })
            .then((usuarioRol) => {
                if (!usuarioRol) throw new Error('No se ha encontrado');
                return usuarioRol;
            });
    }

    usuarioRolServicio.eliminar = (id) => {
        return usuarioRolServicio.obtener(id)
            .then(usuarioRolServicio.destruir);
    };

    return usuarioRolServicio;
};
