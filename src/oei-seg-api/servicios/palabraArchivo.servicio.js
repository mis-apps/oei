module.exports = (servicios, modelos) => {

    const palabraArchivoServicio = {};

    // metodos Repository
    palabraArchivoServicio.listar = (params) => {
        return modelos.palabraArchivo.findAll(palabraArchivoServicio.filtro(params));
    };

    palabraArchivoServicio.encontrarUno = (params) => {
        return modelos.palabraArchivo.findOne(palabraArchivoServicio.filtro(params));
    };

    palabraArchivoServicio.construir = (params) => {
        return modelos.palabraArchivo.build(params);
    };

    palabraArchivoServicio.guardar = (palabraArchivo, params) => {
        if (params) {
            palabraArchivo.set(params);
        }
        return palabraArchivo.save();
    };

    palabraArchivoServicio.destruir = (palabraArchivo) => {
        return palabraArchivo.destroy();
    };

    palabraArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    palabraArchivoServicio.crear = (params) => {
        return palabraArchivoServicio.guardar(palabraArchivoServicio.construir(params));
    };

    palabraArchivoServicio.actualizar = (id, params) => {
        return palabraArchivoServicio.obtener(id)
            .then((palabraArchivo) => {
                return palabraArchivoServicio.guardar(palabraArchivo, params);
            });
    };

    palabraArchivoServicio.obtener = (id) => {
        return palabraArchivoServicio.encontrarUno({ id })
            .then((palabraArchivo) => {
                if (!palabraArchivo) throw new Error('No se ha encontrado');
                return palabraArchivo;
            });
    }

    palabraArchivoServicio.eliminar = (id) => {
        return palabraArchivoServicio.obtener(id)
            .then(palabraArchivoServicio.destruir);
    };

    return palabraArchivoServicio;
};
