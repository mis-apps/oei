module.exports = (servicios, modelos, Op) => {

    const DominioServicio = {};

    // metodos Repository
    DominioServicio.listar = (params) => {
        return modelos.Dominio.findAll(DominioServicio.filtro(params));
    };

    DominioServicio.encontrarUno = (params) => {
        return modelos.Dominio.findOne(DominioServicio.filtro(params));
    };

    DominioServicio.construir = (params) => {
        return modelos.Dominio.build(params);
    };

    DominioServicio.guardar = (Dominio, params) => {
        if (params) {
            Dominio.set(params);
        }
        return Dominio.save();
    };

    DominioServicio.destruir = (Dominio) => {
        return Dominio.destroy();
    };

    DominioServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    DominioServicio.crear = (params) => {
        params.fechaRegistro = new Date();
        params.activo = true;
        return DominioServicio.guardar(DominioServicio.construir(params), params);
    };

    DominioServicio.actualizar = (id, params) => {
        return DominioServicio.obtener(id)
            .then((Dominio) => {
                params.fechaModificacion = new Date();
                return DominioServicio.guardar(Dominio, params);
            });
    };

    DominioServicio.obtener = (id) => {
        return DominioServicio.encontrarUno({ id })
            .then((Dominio) => {
                if (!Dominio) throw new Error('No se ha encontrado');
                return Dominio;
            });
    }

    DominioServicio.eliminar = (id) => {
        return DominioServicio.obtener(id)
            .then(DominioServicio.destruir);
    };

    return DominioServicio;
};
