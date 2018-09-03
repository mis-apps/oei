module.exports = (servicios, modelos) => {

    const negAtributosArchivosServicio = {};

    // metodos Repository
    negAtributosArchivosServicio.listar = (params) => {
        return modelos.negAtributosArchivos.findAll(negAtributosArchivosServicio.filtro(params));
    };

    negAtributosArchivosServicio.encontrarUno = (params) => {
        return modelos.negAtributosArchivos.findOne(negAtributosArchivosServicio.filtro(params));
    };

    negAtributosArchivosServicio.construir = (params) => {
        return modelos.negAtributosArchivos.build(params);
    };

    negAtributosArchivosServicio.guardar = (negAtributosArchivos, params) => {
        if (params) {
            negAtributosArchivos.set(params);
        }
        return negAtributosArchivos.save();
    };

    negAtributosArchivosServicio.destruir = (negAtributosArchivos) => {
        return negAtributosArchivos.destroy();
    };

    negAtributosArchivosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negAtributosArchivosServicio.crear = (params) => {
        return negAtributosArchivosServicio.guardar(negAtributosArchivosServicio.construir(params));
    };

    negAtributosArchivosServicio.actualizar = (id, params) => {
        return negAtributosArchivosServicio.obtener(id)
            .then((negAtributosArchivos) => {
                return negAtributosArchivosServicio.guardar(negAtributosArchivos, params);
            });
    };

    negAtributosArchivosServicio.obtener = (id) => {
        return negAtributosArchivosServicio.encontrarUno({ id })
            .then((negAtributosArchivos) => {
                if (!negAtributosArchivos) throw new Error('No se ha encontrado');
                return negAtributosArchivos;
            });
    }

    negAtributosArchivosServicio.eliminar = (id) => {
        return negAtributosArchivosServicio.obtener(id)
            .then(negAtributosArchivosServicio.destruir);
    };

    return negAtributosArchivosServicio;
};
