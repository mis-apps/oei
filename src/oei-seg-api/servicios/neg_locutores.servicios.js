module.exports = (servicios, modelos) => {

    const negLocutoresServicio = {};

    // metodos Repository
    negLocutoresServicio.listar = (params) => {
        return modelos.negLocutores.findAll(negLocutoresServicio.filtro(params));
    };

    negLocutoresServicio.encontrarUno = (params) => {
        return modelos.negLocutores.findOne(negLocutoresServicio.filtro(params));
    };

    negLocutoresServicio.construir = (params) => {
        return modelos.negLocutores.build(params);
    };

    negLocutoresServicio.guardar = (negLocutores, params) => {
        if (params) {
            negLocutores.set(params);
        }
        return negLocutores.save();
    };

    negLocutoresServicio.destruir = (negLocutores) => {
        return negLocutores.destroy();
    };

    negLocutoresServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negLocutoresServicio.crear = (params) => {
        return negLocutoresServicio.guardar(negLocutoresServicio.construir(params));
    };

    negLocutoresServicio.actualizar = (id, params) => {
        return negLocutoresServicio.obtener(id)
            .then((negLocutores) => {
                return negFrasesServicio.guardar(negLocutores, params);
            });
    };

    negLocutoresServicio.obtener = (id) => {
        return negLocutoresServicio.encontrarUno({ id })
            .then((negLocutores) => {
                if (!negLocutores) throw new Error('No se ha encontrado');
                return negLocutores;
            });
    }

    negLocutoresServicio.eliminar = (id) => {
        return negLocutoresServicio.obtener(id)
            .then(negLocutoresServicio.destruir);
    };

    return negLocutoresServicio;
};