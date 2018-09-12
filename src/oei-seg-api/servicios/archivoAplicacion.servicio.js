module.exports = (servicios, modelos) => {

    const archivoAplicacionServicio = {};

    // metodos Repository
    archivoAplicacionServicio.listar = (params) => {
        return modelos.ArchivoAplicacion.findAll(archivoAplicacionServicio.filtro(params));
    };

    archivoAplicacionServicio.encontrarUno = (params) => {
        return modelos.ArchivoAplicacion.findOne(archivoAplicacionServicio.filtro(params));
    };

    archivoAplicacionServicio.construir = (params) => {
        return modelos.ArchivoAplicacion.build(params);
    };

    archivoAplicacionServicio.guardar = (ArchivoAplicacion, params) => {
        if (params) {
            ArchivoAplicacion.set(params);
        }
        return ArchivoAplicacion.save();
    };

    archivoAplicacionServicio.destruir = (ArchivoAplicacion) => {
        return ArchivoAplicacion.destroy();
    };

    archivoAplicacionServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    archivoAplicacionServicio.crear = (params) => {
        return archivoAplicacionServicio.guardar(archivoAplicacionServicio.construir(params),params);
    };

    archivoAplicacionServicio.actualizar = (id, params) => {
        return archivoAplicacionServicio.obtener(id)
            .then((ArchivoAplicacion) => {
                return archivoAplicacionServicio.guardar(ArchivoAplicacion, params);
            });
    };

    archivoAplicacionServicio.obtener = (id) => {
        return archivoAplicacionServicio.encontrarUno({ id })
            .then((ArchivoAplicacion) => {
                if (!ArchivoAplicacion) throw new Error('No se ha encontrado');
                return ArchivoAplicacion;
            });
    }

    archivoAplicacionServicio.eliminar = (id) => {
        return archivoAplicacionServicio.obtener(id)
            .then(archivoAplicacionServicio.destruir);
    };

    return archivoAplicacionServicio;
};
