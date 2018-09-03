module.exports = (servicios, modelos) => {

    const segRolesServicio = {};

    // metodos Repository
    segRolesServicio.listar = (params) => {
        return modelos.segRoles.findAll(segRolesServicio.filtro(params));
    };

    segRolesServicio.encontrarUno = (params) => {
        return modelos.segRoles.findOne(segRolesServicio.filtro(params));
    };

    segRolesServicio.construir = (params) => {
        return modelos.segRoles.build(params);
    };

    segRolesServicio.guardar = (segRoles, params) => {
        if (params) {
            segRoles.set(params);
        }
        return segRoles.save();
    };

    segRolesServicio.destruir = (segRoles) => {
        return segRoles.destroy();
    };

    segRolesServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    segRolesServicio.crear = (params) => {
        return segRolesServicio.guardar(segRolesServicio.construir(params));
    };

    segRolesServicio.actualizar = (id, params) => {
        return segRolesServicio.obtener(id)
            .then((segRoles) => {
                return segRolesServicio.guardar(segRoles, params);
            });
    };

    segRolesServicio.obtener = (id) => {
        return segRolesServicio.encontrarUno({ id })
            .then((segRoles) => {
                if (!segRoles) throw new Error('No se ha encontrado');
                return segRoles;
            });
    }

    segRolesServicio.eliminar = (id) => {
        return segRolesServicio.obtener(id)
            .then(segRolesServicio.destruir);
    };

    return segRolesServicio;
};
