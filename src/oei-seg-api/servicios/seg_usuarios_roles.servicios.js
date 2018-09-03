module.exports = (servicios, modelos) => {

    const segUsuarioRolesServicio = {};

    // metodos Repository
    segUsuarioRolesServicio.listar = (params) => {
        return modelos.segUsuarioRoles.findAll(segUsuarioRolesServicio.filtro(params));
    };

    segUsuarioRolesServicio.encontrarUno = (params) => {
        return modelos.segUsuarioRoles.findOne(segUsuarioRolesServicio.filtro(params));
    };

    segUsuarioRolesServicio.construir = (params) => {
        return modelos.segUsuarioRoles.build(params);
    };

    segUsuarioRoles.guardar = (segUsuarioRoles, params) => {
        if (params) {
            segUsuarioRoles.set(params);
        }
        return segUsuarioRoles.save();
    };

    segUsuarioRolesServicio.destruir = (segUsuarioRoles) => {
        return segUsuarioRoles.destroy();
    };

    segUsuarioRolesServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    segUsuarioRolesServicio.crear = (params) => {
        return segUsuarioRolesServicio.guardar(segUsuarioRolesServicio.construir(params));
    };

    segUsuarioRolesServicio.actualizar = (id, params) => {
        return segUsuarioRolesServicio.obtener(id)
            .then((segUsuarioRoles) => {
                return segUsuarioRolesServicio.guardar(segUsuarioRoles, params);
            });
    };

    segUsuarioRolesServicio.obtener = (id) => {
        return segUsuarioRolesServicio.encontrarUno({ id })
            .then((segUsuarioRoles) => {
                if (!segUsuarioRoles) throw new Error('No se ha encontrado');
                return segUsuarioRoles;
            });
    }

    segUsuarioRolesServicio.eliminar = (id) => {
        return segUsuarioRolesServicio.obtener(id)
            .then(segUsuarioRolesServicio.destruir);
    };

    return segUsuarioRolesServicio;
};
