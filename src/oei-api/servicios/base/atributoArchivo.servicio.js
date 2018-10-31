module.exports = (servicios, modelos, Op) => {

    const atributoArchivoServicio = {};

    // metodos Repository
    atributoArchivoServicio.listar = (params) => {
        return modelos.AtributoArchivo.findAll(atributoArchivoServicio.filtro(params));
    };

    atributoArchivoServicio.encontrarUno = (params) => {
        return modelos.AtributoArchivo.findOne(atributoArchivoServicio.filtro(params));
    };

    atributoArchivoServicio.construir = (params) => {
        return modelos.AtributoArchivo.build(params);
    };

    atributoArchivoServicio.guardar = (AtributoArchivo, params) => {
        if (params) {
            AtributoArchivo.set(params);
        }
        return AtributoArchivo.save();
    };

    atributoArchivoServicio.destruir = (AtributoArchivo) => {
        return AtributoArchivo.destroy();
    };

    atributoArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    atributoArchivoServicio.crear = (params) => {
        return AtributoArchivoServicio.guardar(AtributoArchivoServicio.construir(params),params);
    };

    atributoArchivoServicio.actualizar = (id, params) => {
        return atributoArchivoServicio.obtener(id)
            .then((AtributoArchivo) => {
                return atributoArchivoServicio.guardar(AtributoArchivo, params);
            });
    };

    atributoArchivoServicio.obtener = (id) => {
        return atributoArchivoServicio.encontrarUno({ id })
            .then((AtributoArchivo) => {
                if (!AtributoArchivo) throw new Error('No se ha encontrado');
                return AtributoArchivo;
            });
    }

    atributoArchivoServicio.eliminar = (id) => {
        return atributoArchivoServicio.obtener(id)
            .then(atributoArchivoServicio.destruir);
    };

    return atributoArchivoServicio;
};
