module.exports = (servicios, modelos) => {

    const segUsuariosServicio = {};

    // metodos Repository
    segUsuariosServicio.listar = (params) => {
        return modelos.segUsuarios.findAll(segUsuariosServicio.filtro(params));
    };

    segUsuariosServicio.encontrarUno = (params) => {
        return modelos.segUsuarios.findOne(segUsuariosServicio.filtro(params));
    };

    segUsuariosServicio.construir = (params) => {
        return modelos.segUsuarios.build(params);
    };

    segUsuariosServicio.guardar = (segUsuarios, params) => {
        if (params) {
            segUsuarios.set(params);
        }
        return segUsuarios.save();
    };

    segUsuariosServicio.destruir = (segUsuarios) => {
        return segUsuarios.destroy();
    };

    segUsuariosServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    segUsuariosServicio.crear = (params) => {
        return segUsuariosServicio.guardar(segUsuariosServicio.construir(params));
    };

    segUsuariosServicio.actualizar = (id, params) => {
        return segUsuariosServicio.obtener(id)
            .then((segUsuarios) => {
                return segUsuariosServicio.guardar(segUsuarios, params);
            });
    };

    segUsuariosServicio.obtener = (id) => {
        return segUsuariosServicio.encontrarUno({ id })
            .then((segUsuariosServicio) => {
                if (!segUsuarios) throw new Error('No se ha encontrado');
                return segUsuarios;
            });
    }

    segUsuariosServicio.eliminar = (id) => {
        return segUsuariosServicio.obtener(id)
            .then(segUsuariosServicio.destruir);
    };

    return segUsuariosServicio;
};
