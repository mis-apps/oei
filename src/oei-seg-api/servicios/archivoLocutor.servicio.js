module.exports = (servicios, modelos) => {

    const archivoLocutorServicio = {};

    // metodos Repository
    archivoLocutorServicio.listar = (params) => {
        return modelos.ArchivoLocutor.findAll(archivoLocutorServicio.filtro(params));
    };

    archivoLocutorServicio.encontrarUno = (params) => {
        return modelos.ArchivoLocutor.findOne(archivoLocutorServicio.filtro(params));
    };

    archivoLocutorServicio.construir = (params) => {
        return modelos.ArchivoLocutor.build(params);
    };

    archivoLocutorServicio.guardar = (ArchivoLocutor, params) => {
        if (params) {
            ArchivoLocutor.set(params);
        }
        return ArchivoLocutor.save();
    };

    archivoLocutorServicio.destruir = (ArchivoLocutor) => {
        return ArchivoLocutor.destroy();
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
            .then((ArchivoLocutor) => {
                return archivoLocutorServicio.guardar(ArchivoLocutor, params);
            });
    };

    archivoLocutorServicio.obtener = (id) => {
        return archivoLocutorServicio.encontrarUno({ id })
            .then((ArchivoLocutor) => {
                if (!ArchivoLocutor) throw new Error('No se ha encontrado');
                return ArchivoLocutor;
            });
    }

    archivoLocutorServicio.eliminar = (id) => {
        return archivoLocutorServicio.obtener(id)
            .then(archivoLocutorServicio.destruir);
    };

    return archivoLocutorServicio;
};
