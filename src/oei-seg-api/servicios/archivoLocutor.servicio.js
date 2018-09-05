module.exports = (servicios, modelos) => {

    const archivoLocutorServicio = {};

    // metodos Repository
    archivoLocutorServicio.listar = (params) => {
        return modelos.archivoLocutor.findAll(archivoLocutorServicio.filtro(params));
    };

    archivoLocutorServicio.encontrarUno = (params) => {
        return modelos.archivoLocutor.findOne(archivoLocutorServicio.filtro(params));
    };

    archivoLocutorServicio.construir = (params) => {
        return modelos.archivoLocutor.build(params);
    };

    archivoLocutorServicio.guardar = (archivoLocutor, params) => {
        if (params) {
            archivoLocutor.set(params);
        }
        return archivoLocutor.save();
    };

    archivoLocutorServicio.destruir = (archivoLocutor) => {
        return archivoLocutor.destroy();
    };

    archivoLocutorServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    archivoLocutorServicio.crear = (params) => {
        return archivoLocutorServicio.guardar(archivoLocutorServicio.construir(params));
    };

    archivoLocutorServicio.actualizar = (id, params) => {
        return archivoLocutorServicio.obtener(id)
            .then((archivoLocutor) => {
                return archivoLocutorServicio.guardar(archivoLocutor, params);
            });
    };

    archivoLocutorServicio.obtener = (id) => {
        return archivoLocutorServicio.encontrarUno({ id })
            .then((archivoLocutor) => {
                if (!archivoLocutor) throw new Error('No se ha encontrado');
                return archivoLocutor;
            });
    }

    archivoLocutorServicio.eliminar = (id) => {
        return archivoLocutorServicio.obtener(id)
            .then(archivoLocutorServicio.destruir);
    };

    return archivoLocutorServicio;
};
