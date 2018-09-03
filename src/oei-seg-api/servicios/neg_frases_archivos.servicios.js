module.exports = (servicios, modelos) => {

    const negFrasesArchivosServicio = {};

    // metodos Repository
    negFrasesArchivosServicio.listar = (params) => {
        return modelos.negFrasesArchivos.findAll(negFrasesArchivosServicio.filtro(params));
    };

    negFrasesArchivosServicio.encontrarUno = (params) => {
        return modelos.negFrasesArchivos.findOne(negFrasesArchivosServicio.filtro(params));
    };

    negFrasesArchivosServicio.construir = (params) => {
        return modelos.negFrasesArchivos.build(params);
    };

    negFrasesArchivosServicio.guardar = (negFrasesArchivos, params) => {
        if (params) {
            negFrasesArchivos.set(params);
        }
        return negFrasesArchivos.save();
    };

    negFrasesArchivosServicio.destruir = (negFrasesArchivos) => {
        return negFrasesArchivos.destroy();
    };

    negFrasesArchivosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negFrasesArchivosServicio.crear = (params) => {
        return negFrasesArchivosServicio.guardar(negFrasesArchivosServicio.construir(params));
    };

    negFrasesArchivosServicio.actualizar = (id, params) => {
        return negFrasesArchivosServicio.obtener(id)
            .then((negFrasesArchivos) => {
                return negFrasesArchivosServicio.guardar(negFrasesArchivos, params);
            });
    };

    negFrasesArchivosServicio.obtener = (id) => {
        return negFrasesArchivosServicio.encontrarUno({ id })
            .then((negFrasesArchivos) => {
                if (!negFrasesArchivos) throw new Error('No se ha encontrado');
                return negFrasesArchivos;
            });
    }

    negFrasesArchivosServicio.eliminar = (id) => {
        return negFrasesArchivosServicio.obtener(id)
            .then(negFrasesArchivosServicio.destruir);
    };

    return negFrasesArchivosServicio;
};