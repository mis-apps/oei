module.exports = (servicios, modelos) => {

    const negPalabrasArchivosServicio = {};

    // metodos Repository
    negPalabrasArchivosServicio.listar = (params) => {
        return modelos.negPalabrasArchivos.findAll(negPalabrasArchivosServicio.filtro(params));
    };

    negPalabrasArchivosServicio.encontrarUno = (params) => {
        return modelos.negPalabrasArchivos.findOne(negPalabrasArchivosServicio.filtro(params));
    };

    negPalabrasArchivosServicio.construir = (params) => {
        return modelos.negPalabrasArchivos.build(params);
    };

    negPalabrasArchivosServicio.guardar = (negPalabrasArchivos, params) => {
        if (params) {
            negPalabrasArchivos.set(params);
        }
        return negPalabrasArchivos.save();
    };

    negPalabrasArchivosServicio.destruir = (negPalabrasArchivos) => {
        return negPalabrasArchivos.destroy();
    };

    negPalabrasArchivosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negPalabrasArchivosServicio.crear = (params) => {
        return negPalabrasArchivosServicio.guardar(negPalabrasArchivosServicio.construir(params));
    };

    negPalabrasArchivosServicio.actualizar = (id, params) => {
        return negPalabrasArchivosServicio.obtener(id)
            .then((negPalabrasArchivos) => {
                return negPalabrasArchivosServicio.guardar(negPalabrasArchivos, params);
            });
    };

    negPalabrasArchivosServicio.obtener = (id) => {
        return negPalabrasArchivosServicio.encontrarUno({ id })
            .then((negPalabrasArchivos) => {
                if (!negPalabrasArchivos) throw new Error('No se ha encontrado');
                return negPalabrasArchivos;
            });
    }

    negPalabrasArchivosServicio.eliminar = (id) => {
        return negPalabrasArchivosServicio.obtener(id)
            .then(negPalabrasArchivosServicio.destruir);
    };

    return negPalabrasArchivosServicio;
};
