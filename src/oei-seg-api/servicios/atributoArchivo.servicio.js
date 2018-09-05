module.exports = (servicios, modelos) => {

    const atributoArchivoServicio = {};

    // metodos Repository
    atributoArchivoServicio.listar = (params) => {
        return modelos.atributoArchivo.findAll(atributoArchivoServicio.filtro(params));
    };

    atributoArchivoServicio.encontrarUno = (params) => {
        return modelos.atributoArchivo.findOne(atributoArchivoServicio.filtro(params));
    };

    atributoArchivoServicio.construir = (params) => {
        return modelos.atributoArchivo.build(params);
    };

    atributoArchivoServicio.guardar = (atributoArchivo, params) => {
        if (params) {
            atributoArchivo.set(params);
        }
        return atributoArchivo.save();
    };

    atributoArchivoServicio.destruir = (atributoArchivo) => {
        return atributoArchivo.destroy();
    };

    atributoArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    atributoArchivoServicio.crear = (params) => {
        return AtributoArchivoServicio.guardar(AtributoArchivoServicio.construir(params));
    };

    atributoArchivoServicio.actualizar = (id, params) => {
        return atributoArchivoServicio.obtener(id)
            .then((atributoArchivo) => {
                return atributoArchivoServicio.guardar(atributoArchivo, params);
            });
    };

    atributoArchivoServicio.obtener = (id) => {
        return atributoArchivoServicio.encontrarUno({ id })
            .then((atributoArchivo) => {
                if (!atributoArchivo) throw new Error('No se ha encontrado');
                return atributoArchivo;
            });
    }

    atributoArchivoServicio.eliminar = (id) => {
        return atributoArchivoServicio.obtener(id)
            .then(atributoArchivoServicio.destruir);
    };

    return atributoArchivoServicio;
};
