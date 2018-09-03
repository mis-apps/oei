module.exports = (servicios, modelos) => {

    const negArchivosServicio = {};

    // metodos Repository
    negArchivosServicio.listar = (params) => {
        return modelos.negArchivos.findAll(negArchivosServicio.filtro(params));
    };

    negArchivosServicio.encontrarUno = (params) => {
        return modelos.negArchivos.findOne(negArchivosServicio.filtro(params));
    };

    negArchivosServicio.construir = (params) => {
        return modelos.negArchivos.build(params);
    };

    negArchivosServicio.guardar = (negArchivos, params) => {
        if (params) {
            negArchivos.set(params);
        }
        return negArchivos.save();
    };

    negArchivosServicio.destruir = (negArchivos) => {
        return negArchivos.destroy();
    };

    negArchivosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negArchivosServicio.crear = (params) => {
        return negArchivosServicio.guardar(negArchivosServicio.construir(params));
    };

    negArchivosServicio.actualizar = (id, params) => {
        return negArchivosServicio.obtener(id)
            .then((negArchivos) => {
                return negArchivosServicio.guardar(negArchivos, params);
            });
    };

    negArchivosServicio.obtener = (id) => {
        return negArchivosServicio.encontrarUno({ id })
            .then((negArchivos) => {
                if (!negArchivos) throw new Error('No se ha encontrado');
                return negArchivos;
            });
    }

    negArchivosServicio.eliminar = (id) => {
        return negArchivosServicio.obtener(id)
            .then(negArchivosServicio.destruir);
    };

    return negArchivosServicio;
};