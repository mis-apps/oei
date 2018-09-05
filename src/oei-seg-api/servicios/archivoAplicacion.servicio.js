module.exports = (servicios, modelos) => {

    const archivoAplicacionServicio = {};

    // metodos Repository
    archivoAplicacionServicio.listar = (params) => {
        return modelos.archivoAplicacion.findAll(archivoAplicacionServicio.filtro(params));
    };

    archivoAplicacionServicio.encontrarUno = (params) => {
        return modelos.archivoAplicacion.findOne(archivoAplicacionServicio.filtro(params));
    };

    archivoAplicacionServicio.construir = (params) => {
        return modelos.archivoAplicacion.build(params);
    };

    archivoAplicacionServicio.guardar = (archivoAplicacion, params) => {
        if (params) {
            archivoAplicacion.set(params);
        }
        return archivoAplicacion.save();
    };

    archivoAplicacionServicio.destruir = (archivoAplicacion) => {
        return archivoAplicacion.destroy();
    };

    archivoAplicacionServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    archivoAplicacionServicio.crear = (params) => {
        return archivoAplicacionServicio.guardar(archivoAplicacionServicio.construir(params));
    };

    archivoAplicacionServicio.actualizar = (id, params) => {
        return archivoAplicacionServicio.obtener(id)
            .then((archivoAplicacion) => {
                return archivoAplicacionServicio.guardar(archivoAplicacion, params);
            });
    };

    archivoAplicacionServicio.obtener = (id) => {
        return archivoAplicacionServicio.encontrarUno({ id })
            .then((archivoAplicacion) => {
                if (!archivoAplicacion) throw new Error('No se ha encontrado');
                return archivoAplicacion;
            });
    }

    archivoAplicacionServicio.eliminar = (id) => {
        return archivoAplicacionServicio.obtener(id)
            .then(archivoAplicacionServicio.destruir);
    };

    return archivoAplicacionServicio;
};
