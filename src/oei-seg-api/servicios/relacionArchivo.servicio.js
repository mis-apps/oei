module.exports = (servicios, modelos) => {

    const relacionArchivoServicio = {};

    // metodos Repository
    relacionArchivoServicio.listar = (params) => {
        return modelos.relacionArchivo.findAll(relacionArchivoServicio.filtro(params));
    };

    relacionArchivoServicio.encontrarUno = (params) => {
        return modelos.relacionArchivo.findOne(relacionArchivoServicio.filtro(params));
    };

    relacionArchivoServicio.construir = (params) => {
        return modelos.relacionArchivo.build(params);
    };

    relacionArchivoServicio.guardar = (relacionArchivo, params) => {
        if (params) {
            relacionArchivo.set(params);
        }
        return relacionArchivo.save();
    };

    relacionArchivoServicio.destruir = (relacionArchivo) => {
        return relacionArchivo.destroy();
    };

    relacionArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    relacionArchivoServicio.crear = (params) => {
        return relacionArchivoServicio.guardar(relacionArchivoServicio.construir(params));
    };

    relacionArchivoServicio.actualizar = (id, params) => {
        return relacionArchivoServicio.obtener(id)
            .then((relacionArchivo) => {
                return relacionArchivoServicio.guardar(relacionArchivo, params);
            });
    };

    relacionArchivoServicio.obtener = (id) => {
        return relacionArchivoServicio.encontrarUno({ id })
            .then((relacionArchivo) => {
                if (!relacionArchivo) throw new Error('No se ha encontrado');
                return relacionArchivo;
            });
    }

    relacionArchivoServicio.eliminar = (id) => {
        return relacionArchivoServicio.obtener(id)
            .then(relacionArchivoServicio.destruir);
    };

    return relacionArchivoServicio;
};
