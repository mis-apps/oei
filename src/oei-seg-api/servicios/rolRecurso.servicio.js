module.exports = (servicios, modelos) => {

    const rolRecursoServicio = {};

    // metodos Repository
    rolRecursoServicio.listar = (params) => {
        return modelos.rolRecurso.findAll(rolRecursoServicio.filtro(params));
    };

    rolRecursoServicio.encontrarUno = (params) => {
        return modelos.rolRecurso.findOne(rolRecursoServicio.filtro(params));
    };

    rolRecursoServicio.construir = (params) => {
        return modelos.rolRecurso.build(params);
    };

    rolRecursoServicio.guardar = (rolRecurso, params) => {
        if (params) {
            rolRecurso.set(params);
        }
        return rolRecurso.save();
    };

    rolRecursoServicio.destruir = (rolRecurso) => {
        return rolRecurso.destroy();
    };

    rolRecursoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    rolRecursoServicio.crear = (params) => {
        return rolRecursoServicio.guardar(rolRecursoServicio.construir(params));
    };

    rolRecursoServicio.actualizar = (id, params) => {
        return rolRecursoServicio.obtener(id)
            .then((rolRecurso) => {
                return rolRecursoServicio.guardar(rolRecurso, params);
            });
    };

    rolRecursoServicio.obtener = (id) => {
        return rolRecursoServicio.encontrarUno({ id })
            .then((rolRecurso) => {
                if (!rolRecurso) throw new Error('No se ha encontrado');
                return rolRecurso;
            });
    }

    rolRecursoServicio.eliminar = (id) => {
        return rolRecursoServicio.obtener(id)
            .then(rolRecursoServicio.destruir);
    };

    return rolRecursoServicio;
};
