module.exports = (servicios, modelos) => {

    const negDominiosServicio = {};

    // metodos Repository
    negDominiosServicio.listar = (params) => {
        return modelos.negDominios.findAll(negDominiosServicio.filtro(params));
    };

    negDominiosServicio.encontrarUno = (params) => {
        return modelos.negDominios.findOne(negDominiosServicio.filtro(params));
    };

    negDominiosServicio.construir = (params) => {
        return modelos.negDominios.build(params);
    };

    negDominiosServicio.guardar = (negDominios, params) => {
        if (params) {
            negDominios.set(params);
        }
        return negDominios.save();
    };

    negDominiosServicio.destruir = (negDominios) => {
        return negDominios.destroy();
    };

    negDominiosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negDominiosServicio.crear = (params) => {
        return negDominiosServicio.guardar(negDominiosServicio.construir(params));
    };

    negDominiosServicio.actualizar = (id, params) => {
        return negDominiosServicio.obtener(id)
            .then((negDominios) => {
                return negDominiosServicio.guardar(negDominios, params);
            });
    };

    negDominiosServicio.obtener = (id) => {
        return negDominiosServicio.encontrarUno({ id })
            .then((negDominios) => {
                if (!negDominios) throw new Error('No se ha encontrado');
                return negDominios;
            });
    }

    negDominiosServicio.eliminar = (id) => {
        return negDominiosServicio.obtener(id)
            .then(negDominiosServicio.destruir);
    };

    return negDominiosServicio;
};
