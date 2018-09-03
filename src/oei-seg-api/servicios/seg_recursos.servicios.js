module.exports = (servicios, modelos) => {

    const segRecursosServicio = {};

    // metodos Repository
    segRecursosServicio.listar = (params) => {
        return modelos.segRecursos.findAll(segRecursosServicio.filtro(params));
    };

    segRecursosServicio.encontrarUno = (params) => {
        return modelos.segRecursos.findOne(segRecursosServicio.filtro(params));
    };

    segRecursosServicio.construir = (params) => {
        return modelos.segRecursos.build(params);
    };

    segRecursosServicio.guardar = (segRecursos, params) => {
        if (params) {
            segRecursos.set(params);
        }
        return segRecursos.save();
    };

    segRecursosServicio.destruir = (segRecursos) => {
        return segRecursos.destroy();
    };

    segRecursosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    segRecursosServicio.crear = (params) => {
        return segRecursosServicio.guardar(segRecursosServicio.construir(params));
    };

    segRecursosServicio.actualizar = (id, params) => {
        return segRecursosServicio.obtener(id)
            .then((segRecursos) => {
                return segRecursosServicio.guardar(segRecursos, params);
            });
    };

    segRecursosServicio.obtener = (id) => {
        return segRecursosServicio.encontrarUno({ id })
            .then((segRecursos) => {
                if (!segRecursos) throw new Error('No se ha encontrado');
                return segRecursos;
            });
    }

    segRecursosServicio.eliminar = (id) => {
        return segRecursosServicio.obtener(id)
            .then(segRecursosServicio.destruir);
    };

    return segRecursosServicio;
};
