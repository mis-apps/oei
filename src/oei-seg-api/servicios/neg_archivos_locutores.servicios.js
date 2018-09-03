module.exports = (servicios, modelos) => {

    const negArchivosLocutoresServicio = {};

    // metodos Repository
    negArchivosLocutoresServicio.listar = (params) => {
        return modelos.negArchivosLocutores.findAll(negArchivosLocutoresServicio.filtro(params));
    };

    negArchivosLocutoresServicio.encontrarUno = (params) => {
        return modelos.negArchivosLocutores.findOne(negArchivosLocutoresServicio.filtro(params));
    };

    negArchivosLocutoresServicio.construir = (params) => {
        return modelos.negArchivosLocutores.build(params);
    };

    negArchivosLocutoresServicio.guardar = (negArchivosLocutores, params) => {
        if (params) {
            negArchivosLocutores.set(params);
        }
        return negArchivosLocutores.save();
    };

    negArchivosLocutoresServicio.destruir = (negArchivosLocutores) => {
        return negArchivosLocutores.destroy();
    };

    negArchivosLocutoresServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    negArchivosLocutoresServicio.crear = (params) => {
        return negArchivosLocutoresServicio.guardar(negArchivosLocutoresServicio.construir(params));
    };

    negArchivosLocutoresServicio.actualizar = (id, params) => {
        return negArchivosLocutoresServicio.obtener(id)
            .then((negArchivosLocutores) => {
                return negArchivosLocutoresServicio.guardar(negArchivosLocutores, params);
            });
    };

    negArchivosLocutoresServicio.obtener = (id) => {
        return negArchivosLocutoresServicio.encontrarUno({ id })
            .then((negArchivosLocutores) => {
                if (!negArchivosLocutores) throw new Error('No se ha encontrado');
                return negArchivosLocutores;
            });
    }

    negArchivosLocutoresServicio.eliminar = (id) => {
        return negArchivosLocutoresServicio.obtener(id)
            .then(negArchivosLocutoresServicio.destruir);
    };

    return negArchivosLocutoresServicio;
};
