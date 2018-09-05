module.exports = (servicios, modelos) => {

    const idiomaLocutorServicio = {};

    // metodos Repository
    idiomaLocutorServicio.listar = (params) => {
        return modelos.idiomaLocutor.findAll(idiomaLocutorServicio.filtro(params));
    };

    idiomaLocutorServicio.encontrarUno = (params) => {
        return modelos.idiomaLocutor.findOne(idiomaLocutorServicio.filtro(params));
    };

    idiomaLocutorServicio.construir = (params) => {
        return modelos.idiomaLocutor.build(params);
    };

    idiomaLocutorServicio.guardar = (idiomaLocutor, params) => {
        if (params) {
            idiomaLocutor.set(params);
        }
        return idiomaLocutor.save();
    };

    idiomaLocutorServicio.destruir = (IdiomaLocutor) => {
        return IdiomaLocutor.destroy();
    };

    idiomaLocutorServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    idiomaLocutorServicio.crear = (params) => {
        return idiomaLocutorServicio.guardar(idiomaLocutorServicio.construir(params));
    };

    idiomaLocutorServicio.actualizar = (id, params) => {
        return idiomaLocutorServicio.obtener(id)
            .then((idiomaLocutor) => {
                return idiomaLocutorServicio.guardar(idiomaLocutor, params);
            });
    };

    idiomaLocutorServicio.obtener = (id) => {
        return idiomaLocutorServicio.encontrarUno({ id })
            .then((idiomaLocutor) => {
                if (!idiomaLocutor) throw new Error('No se ha encontrado');
                return idiomaLocutor;
            });
    }

    idiomaLocutorServicio.eliminar = (id) => {
        return idiomaLocutorServicio.obtener(id)
            .then(idiomaLocutorServicio.destruir);
    };

    return idiomaLocutorServicio;
};
