module.exports = (servicios, modelos) => {

    const FraseServicio = {};

    // metodos Repository
    FraseServicio.listar = (params) => {
        return modelos.Frase.findAll(FraseServicio.filtro(params));
    };

    FraseServicio.encontrarUno = (params) => {
        return modelos.Frase.findOne(FraseServicio.filtro(params));
    };

    FraseServicio.construir = (params) => {
        return modelos.Frase.build(params);
    };

    FraseServicio.guardar = (Frase, params) => {
        if (params) {
            Frase.set(params);
        }
        return Frase.save();
    };

    FraseServicio.destruir = (Frase) => {
        return Frase.destroy();
    };

    FraseServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    FraseServicio.crear = (params) => {
        return FraseServicio.guardar(FraseServicio.construir(params),params);
    };

    FraseServicio.actualizar = (id, params) => {
        return FraseServicio.obtener(id)
            .then((Frase) => {
                return FraseServicio.guardar(Frase, params);
            });
    };

    FraseServicio.obtener = (id) => {
        return FraseServicio.encontrarUno({ id })
            .then((Frase) => {
                if (!Frase) throw new Error('No se ha encontrado');
                return Frase;
            });
    }

    FraseServicio.eliminar = (id) => {
        return FraseServicio.obtener(id)
            .then(FraseServicio.destruir);
    };

    return FraseServicio;
};
