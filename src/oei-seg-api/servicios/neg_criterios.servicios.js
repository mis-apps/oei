module.exports = (servicios, modelos) => {

    const negCriteriosServicio = {};

    // metodos Repository
    negCriteriosServicio.listar = (params) => {
        return modelos.negCriterios.findAll(negCriteriosServicio.filtro(params));
    };

    negCriteriosServicio.encontrarUno = (params) => {
        return modelos.negCriterios.findOne(negCriteriosServicio.filtro(params));
    };

    negCriteriosServicio.construir = (params) => {
        return modelos.negCriterios.build(params);
    };

    negCriteriosServicio.guardar = (negCriterios, params) => {
        if (params) {
            negCriterios.set(params);
        }
        return negCriterios.save();
    };

    negCriteriosServicio.destruir = (negCriterios) => {
        return negCriterios.destroy();
    };

    negCriteriosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negCriteriosServicio.crear = (params) => {
        return negCriteriosServicio.guardar(negCriteriosServicio.construir(params));
    };

    negCriteriosServicio.actualizar = (id, params) => {
        return negCriteriosServicio.obtener(id)
            .then((negCriterios) => {
                return negCriteriosServicio.guardar(negCriteriosServicio, params);
            });
    };

    negCriteriosServicio.obtener = (id) => {
        return negCriteriosServicio.encontrarUno({ id })
            .then((negCriterios) => {
                if (!negCriterios) throw new Error('No se ha encontrado');
                return negCriterios;
            });
    }

    negCriteriosServicio.eliminar = (id) => {
        return negCriteriosServicio.obtener(id)
            .then(negCriteriosServicio.destruir);
    };

    return negCriteriosServicio;
};
