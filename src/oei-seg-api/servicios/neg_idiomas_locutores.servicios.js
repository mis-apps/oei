module.exports = (servicios, modelos) => {

    const negIdiomasLocutoresServicio = {};

    // metodos Repository
    negIdiomasLocutoresServicio.listar = (params) => {
        return modelos.negIdiomasLocutores.findAll(negIdiomasLocutoresServicio.filtro(params));
    };

    negIdiomasLocutoresServicio.encontrarUno = (params) => {
        return modelos.negIdiomasLocutores.findOne(negIdiomasLocutoresServicio.filtro(params));
    };

    negIdiomasLocutoresServicio.construir = (params) => {
        return modelos.negIdiomasLocutores.build(params);
    };

    negIdiomasLocutoresServicio.guardar = (negIdiomasLocutores, params) => {
        if (params) {
            negIdiomasLocutores.set(params);
        }
        return negIdiomasLocutores.save();
    };

    negIdiomasLocutoresServicio.destruir = (negIdiomasLocutores) => {
        return negIdiomasLocutores.destroy();
    };

    negIdiomasLocutoresServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negIdiomasLocutoresServicio.crear = (params) => {
        return negIdiomasLocutoresServicio.guardar(negIdiomasLocutoresServicio.construir(params));
    };

    negIdiomasLocutoresServicio.actualizar = (id, params) => {
        return negIdiomasLocutoresServicio.obtener(id)
            .then((negIdiomasLocutores) => {
                return negIdiomasLocutoresServicio.guardar(negIdiomasLocutores, params);
            });
    };

    negIdiomasLocutoresServicio.obtener = (id) => {
        return negIdiomasLocutoresServicio.encontrarUno({ id })
            .then((negIdiomasLocutores) => {
                if (!negIdiomasLocutores) throw new Error('No se ha encontrado');
                return negIdiomasLocutores;
            });
    }

    negIdiomasLocutoresServicio.eliminar = (id) => {
        return negIdiomasLocutoresServicio.obtener(id)
            .then(negIdiomasLocutoresServicio.destruir);
    };

    return negIdiomasLocutoresServicio;
};
