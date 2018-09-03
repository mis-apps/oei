module.exports = (servicios, modelos) => {

    const segModulosServicio = {};

    // metodos Repository
    segModulosServicio.listar = (params) => {
        return modelos.segModulos.findAll(segModulosServicio.filtro(params));
    };

    segModulosServicio.encontrarUno = (params) => {
        return modelos.segModulos.findOne(segModulosServicio.filtro(params));
    };

    segModulosServicio.construir = (params) => {
        return modelos.segModulos.build(params);
    };

    segModulosServicio.guardar = (segModulos, params) => {
        if (params) {
            segModulos.set(params);
        }
        return segModulos.save();
    };

    segModulosServicio.destruir = (segModulos) => {
        return segModulos.destroy();
    };

    segModulosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    segModulosServicio.crear = (params) => {
        return segModulosServicio.guardar(segModulosServicio.construir(params));
    };

    segModulosServicio.actualizar = (id, params) => {
        return segModulosServicio.obtener(id)
            .then((segModulos) => {
                return segModulosServicio.guardar(segModulos, params);
            });
    };

    segModulosServicio.obtener = (id) => {
        return segModulosServicio.encontrarUno({ id })
            .then((segModulos) => {
                if (!segModulos) throw new Error('No se ha encontrado');
                return segModulos;
            });
    }

    segModulosServicio.eliminar = (id) => {
        return segModulosServicio.obtener(id)
            .then(segModulosServicio.destruir);
    };

    return segModulosServicio;
};
