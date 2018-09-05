module.exports = (servicios, modelos) => {

    const fraseArchivoServicio = {};

    // metodos Repository
    fraseArchivoServicio.listar = (params) => {
        return modelos.fraseArchivo.findAll(fraseArchivoServicio.filtro(params));
    };

    fraseArchivoServicio.encontrarUno = (params) => {
        return modelos.fraseArchivo.findOne(fraseArchivoServicio.filtro(params));
    };

    fraseArchivoServicio.construir = (params) => {
        return modelos.fraseArchivo.build(params);
    };

    fraseArchivoServicio.guardar = (fraseArchivo, params) => {
        if (params) {
            fraseArchivo.set(params);
        }
        return fraseArchivo.save();
    };

    fraseArchivoServicio.destruir = (fraseArchivo) => {
        return fraseArchivo.destroy();
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
            .then((fraseArchivo) => {
                return fraseArchivoServicio.guardar(fraseArchivo, params);
            });
    };

    fraseArchivoServicio.obtener = (id) => {
        return fraseArchivoServicio.encontrarUno({ id })
            .then((fraseArchivo) => {
                if (!fraseArchivo) throw new Error('No se ha encontrado');
                return fraseArchivo;
            });
    }

    fraseArchivoServicio.eliminar = (id) => {
        return fraseArchivoServicio.obtener(id)
            .then(fraseArchivoServicio.destruir);
    };

    return fraseArchivoServicio;
};