module.exports = (servicios, modelos, Op) => {

    const LocutorServicio = {};

    // metodos Repository
    LocutorServicio.listar = (params) => {
        return modelos.Locutor.findAll(LocutorServicio.filtro(params));
    };

    LocutorServicio.encontrarUno = (params) => {
        return modelos.Locutor.findOne(LocutorServicio.filtro(params));
    };

    LocutorServicio.construir = (params) => {
        return modelos.Locutor.build(params);
    };

    LocutorServicio.guardar = (Locutor, params) => {
        if (params) {
            Locutor.set(params);
        }
        return Locutor.save();
    };

    LocutorServicio.destruir = (Locutor) => {
        return Locutor.destroy();
    };

    LocutorServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    LocutorServicio.crear = (params) => {
        return LocutorServicio.guardar(LocutorServicio.construir(params), params);
    };

    LocutorServicio.actualizar = (id, params) => {
        return LocutorServicio.obtener(id)
            .then((Locutor) => {
                return negFrasesServicio.guardar(Locutor, params);
            });
    };

    LocutorServicio.obtener = (id) => {
        return LocutorServicio.encontrarUno({ id })
            .then((Locutor) => {
                if (!Locutor) throw new Error('No se ha encontrado');
                return Locutor;
            });
    }

    LocutorServicio.eliminar = (id) => {
        return LocutorServicio.obtener(id)
            .then(LocutorServicio.destruir);
    };

    return LocutorServicio;
};