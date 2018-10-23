module.exports = (servicios, modelos, Op) => {

    const PalabraServicio = {};

    // metodos Repository
    PalabraServicio.listar = (params) => {
        return modelos.Palabra.findAll(PalabraServicio.filtro(params));
    };

    PalabraServicio.encontrarUno = (params) => {
        return modelos.Palabra.findOne(PalabraServicio.filtro(params));
    };

    PalabraServicio.construir = (params) => {
        return modelos.Palabra.build(params);
    };

    PalabraServicio.guardar = (Palabra, params) => {
        if (params) {
            Palabra.set(params);
        }
        return PalabraServicio.save();
    };

    PalabraServicio.destruir = (Palabra) => {
        return Palabra.destroy();
    };

    PalabraServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    PalabraServicio.crear = (params) => {
        return PalabraServicio.guardar(PalabraServicio.construir(params), params);
    };

    PalabraServicio.actualizar = (id, params) => {
        return PalabraServicio.obtener(id)
            .then((Palabra) => {
                return PalabraServicio.guardar(Palabra, params);
            });
    };

    PalabraServicio.obtener = (id) => {
        return PalabraServicio.encontrarUno({ id })
            .then((Palabra) => {
                if (!Palabra) throw new Error('No se ha encontrado');
                return Palabra;
            });
    }

    PalabraServicio.eliminar = (id) => {
        return PalabraServicio.obtener(id)
            .then(PalabraServicio.destruir);
    };

    return PalabraServicio;
};
