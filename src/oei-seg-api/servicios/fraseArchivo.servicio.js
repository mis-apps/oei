module.exports = (servicios, modelos) => {

    const fraseArchivoServicio = {};

    // metodos Repository
    fraseArchivoServicio.listar = (params) => {
        return modelos.FraseArchivo.findAll(fraseArchivoServicio.filtro(params));
    };

    fraseArchivoServicio.encontrarUno = (params) => {
        return modelos.FraseArchivo.findOne(fraseArchivoServicio.filtro(params));
    };

    fraseArchivoServicio.construir = (params) => {
        return modelos.FraseArchivo.build(params);
    };

    fraseArchivoServicio.guardar = (FraseArchivo, params) => {
        if (params) {
            FraseArchivo.set(params);
        }
        return FraseArchivo.save();
    };

    fraseArchivoServicio.destruir = (FraseArchivo) => {
        return FraseArchivo.destroy();
    };

    fraseArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    fraseArchivoServicio.crear = (params) => {
        return fraseArchivoServicio.guardar(fraseArchivoServicio.construir(params));
    };

    fraseArchivoServicio.actualizar = (id, params) => {
        return fraseArchivoServicio.obtener(id)
            .then((FraseArchivo) => {
                return fraseArchivoServicio.guardar(FraseArchivo, params);
            });
    };

    fraseArchivoServicio.obtener = (id) => {
        return fraseArchivoServicio.encontrarUno({ id })
            .then((FraseArchivo) => {
                if (!FraseArchivo) throw new Error('No se ha encontrado');
                return FraseArchivo;
            });
    }

    fraseArchivoServicio.eliminar = (id) => {
        return fraseArchivoServicio.obtener(id)
            .then(fraseArchivoServicio.destruir);
    };

    return fraseArchivoServicio;
};