module.exports = (servicios, modelos) => {

    const negFrasesServicio = {};

    // metodos Repository
    negFrasesServicio.listar = (params) => {
        return modelos.negFrases.findAll(negFrasesServicio.filtro(params));
    };

    negFrasesServicio.encontrarUno = (params) => {
        return modelos.negFrases.findOne(negFrasesServicio.filtro(params));
    };

    negFrasesServicio.construir = (params) => {
        return modelos.negFrases.build(params);
    };

    negFrasesServicio.guardar = (negFrases, params) => {
        if (params) {
            negFrases.set(params);
        }
        return negFrases.save();
    };

    negFrasesServicio.destruir = (negFrases) => {
        return negFrases.destroy();
    };

    negFrasesServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negFrasesServicio.crear = (params) => {
        return negFrasesServicio.guardar(negFrasesServicio.construir(params));
    };

    negFrasesServicio.actualizar = (id, params) => {
        return negFrasesServicio.obtener(id)
            .then((negFrases) => {
                return negFrasesServicio.guardar(negFrases, params);
            });
    };

    negFrasesServicio.obtener = (id) => {
        return negFrasesServicio.encontrarUno({ id })
            .then((negFrases) => {
                if (!negFrases) throw new Error('No se ha encontrado');
                return negFrases;
            });
    }

    negFrasesServicio.eliminar = (id) => {
        return negFrasesServicio.obtener(id)
            .then(negFrasesServicio.destruir);
    };

    return negFrasesServicio;
};
