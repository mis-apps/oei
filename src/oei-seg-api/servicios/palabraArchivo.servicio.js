module.exports = (servicios, modelos) => {

    const palabraArchivoServicio = {};

    // metodos Repository
    palabraArchivoServicio.listar = (params) => {
        return modelos.PalabraArchivo.findAll(palabraArchivoServicio.filtro(params));
    };

    palabraArchivoServicio.encontrarUno = (params) => {
        return modelos.PalabraArchivo.findOne(palabraArchivoServicio.filtro(params));
    };

    palabraArchivoServicio.construir = (params) => {
        return modelos.PalabraArchivo.build(params);
    };

    palabraArchivoServicio.guardar = (PalabraArchivo, params) => {
        if (params) {
            PalabraArchivo.set(params);
        }
        return PalabraArchivo.save();
    };

    palabraArchivoServicio.destruir = (PalabraArchivo) => {
        return PalabraArchivo.destroy();
    };

    palabraArchivoServicio.filtro = (condiciones) => {
        return condiciones ? { where: condiciones } : {};
    };

    // metodos Factory
    palabraArchivoServicio.crear = (params) => {
        return palabraArchivoServicio.guardar(palabraArchivoServicio.construir(params), params);
    };

    palabraArchivoServicio.actualizar = (id, params) => {
        return palabraArchivoServicio.obtener(id)
            .then((PalabraArchivo) => {
                return palabraArchivoServicio.guardar(PalabraArchivo, params);
            });
    };

    palabraArchivoServicio.obtener = (id) => {
        return palabraArchivoServicio.encontrarUno({ id })
            .then((PalabraArchivo) => {
                if (!PalabraArchivo) throw new Error('No se ha encontrado');
                return PalabraArchivo;
            });
    }

    palabraArchivoServicio.eliminar = (id) => {
        return palabraArchivoServicio.obtener(id)
            .then(palabraArchivoServicio.destruir);
    };

    return palabraArchivoServicio;
};
