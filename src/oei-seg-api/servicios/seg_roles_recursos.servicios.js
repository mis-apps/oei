module.exports = (servicios, modelos) => {

    const segRolesRecurosServicio = {};

    // metodos Repository
    segRolesRecurosServicio.listar = (params) => {
        return modelos.segRolesRecuros.findAll(segRolesRecurosServicio.filtro(params));
    };

    segRolesRecurosServicio.encontrarUno = (params) => {
        return modelos.segRolesRecuros.findOne(segRolesRecurosServicio.filtro(params));
    };

    segRolesRecurosServicio.construir = (params) => {
        return modelos.segRolesRecuros.build(params);
    };

    segRolesRecurosServicio.guardar = (segRolesRecuros, params) => {
        if (params) {
            segRolesRecuros.set(params);
        }
        return segRolesRecuros.save();
    };

    segRolesRecurosServicio.destruir = (segRolesRecuros) => {
        return segRolesRecuros.destroy();
    };

    segRolesRecurosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    segRolesRecurosServicio.crear = (params) => {
        return segRolesRecurosServicio.guardar(segRolesRecurosServicio.construir(params));
    };

    segRolesRecurosServicio.actualizar = (id, params) => {
        return segRolesRecurosServicio.obtener(id)
            .then((segRolesRecuros) => {
                return segRolesRecurosServicio.guardar(segRolesRecuros, params);
            });
    };

    segRolesRecurosServicio.obtener = (id) => {
        return segRolesRecurosServicio.encontrarUno({ id })
            .then((segRolesRecuros) => {
                if (!segRolesRecuros) throw new Error('No se ha encontrado');
                return segRolesRecuros;
            });
    }

    segRolesRecurosServicio.eliminar = (id) => {
        return segRolesRecurosServicio.obtener(id)
            .then(segRolesRecurosServicio.destruir);
    };

    return segRolesRecurosServicio;
};
