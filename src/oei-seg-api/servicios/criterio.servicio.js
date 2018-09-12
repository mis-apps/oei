module.exports = (servicios, modelos) => {

    const CriterioServicio = {};

    // metodos Repository
    CriterioServicio.listar = (params) => {
        return modelos.Criterio.findAll(CriterioServicio.filtro(params));
    };

    CriterioServicio.encontrarUno = (params) => {
        return modelos.Criterio.findOne(CriterioServicio.filtro(params));
    };

    CriterioServicio.construir = (params) => {
        return modelos.Criterio.build(params);
    };

    CriterioServicio.guardar = (Criterio, params) => {
        if (params) {
            Criterio.set(params);
        }
        return Criterio.save();
    };

    CriterioServicio.destruir = (Criterio) => {
        return Criterio.destroy();
    };

    CriterioServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    CriterioServicio.crear = (params) => {
        return CriterioServicio.guardar(CriterioServicio.construir(params),params);
    };

    CriterioServicio.actualizar = (id, params) => {
        return CriterioServicio.obtener(id)
            .then((Criterio) => {
                return CriterioServicio.guardar(Criterio, params);
            });
    };

    CriterioServicio.obtener = (id) => {
        return CriterioServicio.encontrarUno({ id })
            .then((Criterio) => {
                if (!Criterio) throw new Error('No se ha encontrado');
                return Criterio;
            });
    }

    CriterioServicio.eliminar = (id) => {
        return CriterioServicio.obtener(id)
            .then(CriterioServicio.destruir);
    };

    return CriterioServicio;
};
