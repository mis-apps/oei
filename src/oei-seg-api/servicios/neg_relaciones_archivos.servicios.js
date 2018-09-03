module.exports = (servicios, modelos) => {

    const negRelacionesArchivosServicio = {};

    // metodos Repository
    negRelacionesArchivosServicio.listar = (params) => {
        return modelos.negRelacionesArchivos.findAll(negRelacionesArchivosServicio.filtro(params));
    };

    negRelacionesArchivosServicio.encontrarUno = (params) => {
        return modelos.negRelacionesArchivos.findOne(negRelacionesArchivosServicio.filtro(params));
    };

    negRelacionesArchivosServicio.construir = (params) => {
        return modelos.negRelacionesArchivos.build(params);
    };

    negRelacionesArchivosServicio.guardar = (negRelacionesArchivos, params) => {
        if (params) {
            negRelacionesArchivos.set(params);
        }
        return negRelacionesArchivos.save();
    };

    negRelacionesArchivosServicio.destruir = (negRelacionesArchivos) => {
        return negRelacionesArchivos.destroy();
    };

    negRelacionesArchivosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negRelacionesArchivosServicio.crear = (params) => {
        return negRelacionesArchivosServicio.guardar(negRelacionesArchivosServicio.construir(params));
    };

    negRelacionesArchivosServicio.actualizar = (id, params) => {
        return negRelacionesArchivosServicio.obtener(id)
            .then((negRelacionesArchivos) => {
                return negRelacionesArchivosServicio.guardar(negRelacionesArchivos, params);
            });
    };

    negRelacionesArchivosServicio.obtener = (id) => {
        return negRelacionesArchivosServicio.encontrarUno({ id })
            .then((negRelacionesArchivos) => {
                if (!negRelacionesArchivos) throw new Error('No se ha encontrado');
                return negRelacionesArchivos;
            });
    }

    negRelacionesArchivosServicio.eliminar = (id) => {
        return negRelacionesArchivosServicio.obtener(id)
            .then(negRelacionesArchivosServicio.destruir);
    };

    return negRelacionesArchivosServicio;
};
