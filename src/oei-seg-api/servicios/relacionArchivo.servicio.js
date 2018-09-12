module.exports = (servicios, modelos) => {

    const relacionArchivoServicio = {};

    // metodos Repository
    relacionArchivoServicio.listar = (params) => {
        return modelos.RelacionArchivo.findAll(relacionArchivoServicio.filtro(params));
    };

    relacionArchivoServicio.encontrarUno = (params) => {
        return modelos.RelacionArchivo.findOne(relacionArchivoServicio.filtro(params));
    };

    relacionArchivoServicio.construir = (params) => {
        return modelos.RelacionArchivo.build(params);
    };

    relacionArchivoServicio.guardar = (RelacionArchivo, params) => {
        if (params) {
            RelacionArchivo.set(params);
        }
        return RelacionArchivo.save();
    };

    relacionArchivoServicio.destruir = (RelacionArchivo) => {
        return RelacionArchivo.destroy();
    };

    relacionArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    relacionArchivoServicio.crear = (params) => {
        return relacionArchivoServicio.guardar(relacionArchivoServicio.construir(params), params);
    };

    relacionArchivoServicio.actualizar = (id, params) => {
        return relacionArchivoServicio.obtener(id)
            .then((RelacionArchivo) => {
                return relacionArchivoServicio.guardar(RelacionArchivo, params);
            });
    };

    relacionArchivoServicio.obtener = (id) => {
        return relacionArchivoServicio.encontrarUno({ id })
            .then((RelacionArchivo) => {
                if (!RelacionArchivo) throw new Error('No se ha encontrado');
                return RelacionArchivo;
            });
    }

    relacionArchivoServicio.eliminar = (id) => {
        return relacionArchivoServicio.obtener(id)
            .then(relacionArchivoServicio.destruir);
    };

    return relacionArchivoServicio;
};
