module.exports = (servicios, modelos) => {

    const negArchivosAplicacionesServicio = {};

    // metodos Repository
    negArchivosAplicacionesServicio.listar = (params) => {
        return modelos.negArchivosAplicaciones.findAll(negArchivosAplicacionesServicio.filtro(params));
    };

    negArchivosAplicacionesServicio.encontrarUno = (params) => {
        return modelos.negArchivosAplicaciones.findOne(negArchivosAplicacionesServicio.filtro(params));
    };

    negArchivosAplicacionesServicio.construir = (params) => {
        return modelos.negArchivosAplicaciones.build(params);
    };

    negArchivosAplicacionesServicio.guardar = (negArchivosAplicaciones, params) => {
        if (params) {
            negArchivosAplicaciones.set(params);
        }
        return negArchivosAplicaciones.save();
    };

    negArchivosAplicacionesServicio.destruir = (negArchivosAplicaciones) => {
        return negArchivosAplicaciones.destroy();
    };

    negArchivosAplicacionesServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negArchivosAplicacionesServicio.crear = (params) => {
        return negArchivosAplicacionesServicio.guardar(negArchivosAplicacionesServicio.construir(params));
    };

    negArchivosAplicacionesServicio.actualizar = (id, params) => {
        return negArchivosAplicacionesServicio.obtener(id)
            .then((negArchivosAplicaciones) => {
                return negArchivosAplicacionesServicio.guardar(negArchivosAplicaciones, params);
            });
    };

    negArchivosAplicacionesServicio.obtener = (id) => {
        return negArchivosAplicacionesServicio.encontrarUno({ id })
            .then((negArchivosAplicaciones) => {
                if (!negArchivosAplicaciones) throw new Error('No se ha encontrado');
                return negArchivosAplicaciones;
            });
    }

    negArchivosAplicacionesServicio.eliminar = (id) => {
        return negArchivosAplicacionesServicio.obtener(id)
            .then(negArchivosAplicacionesServicio.destruir);
    };

    return negArchivosAplicacionesServicio;
};
