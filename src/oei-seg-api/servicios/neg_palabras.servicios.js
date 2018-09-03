module.exports = (servicios, modelos) => {

    const negPalabrasServicio = {};

    // metodos Repository
    negPalabrasServicio.listar = (params) => {
        return modelos.Feriado.findAll(negPalabrasServicio.filtro(params));
    };

    negPalabrasServicio.encontrarUno = (params) => {
        return modelos.negPalabras.findOne(negPalabrasServicio.filtro(params));
    };

    negPalabrasServicio.construir = (params) => {
        return modelos.negPalabras.build(params);
    };

    negPalabrasServicio.guardar = (negPalabras, params) => {
        if (params) {
            negPalabras.set(params);
        }
        return negPalabrasServicio.save();
    };

    negPalabrasServicio.destruir = (negPalabras) => {
        return negPalabras.destroy();
    };

    negPalabrasServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negPalabrasServicio.crear = (params) => {
        return negPalabrasServicio.guardar(negPalabrasServicio.construir(params));
    };

    negPalabrasServicio.actualizar = (id, params) => {
        return negPalabrasServicio.obtener(id)
            .then((negPalabras) => {
                return negPalabrasServicio.guardar(negPalabrasServicio, params);
            });
    };

    negPalabrasServicio.obtener = (id) => {
        return negPalabrasServicio.encontrarUno({ id })
            .then((negPalabras) => {
                if (!negPalabras) throw new Error('No se ha encontrado');
                return negPalabras;
            });
    }

    negPalabrasServicio.eliminar = (id) => {
        return negPalabrasServicio.obtener(id)
            .then(negPalabrasServicio.destruir);
    };

    return negPalabrasServicio;
};
