module.exports = (servicios, modelos, Op) => {

    const idiomaLocutorServicio = {};

    // metodos Repository
    idiomaLocutorServicio.listar = (params) => {
        return modelos.IdiomaLocutor.findAll(idiomaLocutorServicio.filtro(params));
    };

    idiomaLocutorServicio.encontrarUno = (params) => {
        return modelos.IdiomaLocutor.findOne(idiomaLocutorServicio.filtro(params));
    };

    idiomaLocutorServicio.construir = (params) => {
        return modelos.IdiomaLocutor.build(params);
    };

    idiomaLocutorServicio.guardar = (IdiomaLocutor, params) => {
        if (params) {
            IdiomaLocutor.set(params);
        }
        return IdiomaLocutor.save();
    };

    idiomaLocutorServicio.destruir = (IdiomaLocutor) => {
        return IdiomaLocutor.destroy();
    };

    idiomaLocutorServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    idiomaLocutorServicio.crear = (params) => {
        return idiomaLocutorServicio.guardar(idiomaLocutorServicio.construir(params), params);
    };

    idiomaLocutorServicio.actualizar = (id, params) => {
        return idiomaLocutorServicio.obtener(id)
            .then((IdiomaLocutor) => {
                return idiomaLocutorServicio.guardar(IdiomaLocutor, params);
            });
    };

    idiomaLocutorServicio.obtener = (id) => {
        return idiomaLocutorServicio.encontrarUno({ id })
            .then((IdiomaLocutor) => {
                if (!IdiomaLocutor) throw new Error('No se ha encontrado');
                return IdiomaLocutor;
            });
    }

    idiomaLocutorServicio.eliminar = (id) => {
        return idiomaLocutorServicio.obtener(id)
            .then(idiomaLocutorServicio.destruir);
    };

    return idiomaLocutorServicio;
};
