module.exports = (servicios, modelos) => {

    const ArchivoServicio = {};

    // metodos Repository
    ArchivoServicio.listar = (params) => {
        return modelos.Archivo.findAll(ArchivoServicio.filtro(params));
    };

    ArchivoServicio.encontrarUno = (params) => {
        return modelos.Archivo.findOne(ArchivoServicio.filtro(params));
    };

    ArchivoServicio.construir = (params) => {
        return modelos.Archivo.build(params);
    };

    ArchivoServicio.guardar = (Archivo, params) => {
        if (params) {
            Archivo.set(params);
        }
        return Archivo.save();
    };

    ArchivoServicio.destruir = (Archivo) => {
        return Archivo.destroy();
    };

    ArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    ArchivoServicio.crear = (params) => {
        return ArchivoServicio.guardar(ArchivoServicio.construir(params));
    };

    ArchivoServicio.actualizar = (id, params) => {
        return ArchivoServicio.obtener(id)
            .then((Archivo) => {
                return ArchivoServicio.guardar(Archivo, params);
            });
    };

    ArchivoServicio.obtener = (id) => {
        return ArchivoServicio.encontrarUno({ id })
            .then((Archivo) => {
                if (!Archivo) throw new Error('No se ha encontrado');
                return Archivo;
            });
    }

    ArchivoServicio.eliminar = (id) => {
        return ArchivoServicio.obtener(id)
            .then(ArchivoServicio.destruir);
    };

    return ArchivoServicio;
};