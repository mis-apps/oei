module.exports = (router, servicios) => {

    router.get('/archivoAplicacion', (req, res, next) => {
        return servicios.ArchivoAplicacion.listar()
            .then((archivosAplicaciones) => {
                return res.status(200).json(archivosAplicaciones);
            })
            .catch(next);
    });

    router.post('/archivoAplicacion', (req, res, next) => {
        return servicios.ArchivoAplicacion.crear(req.body)
            .then((archivosAplicaciones) => {
                return res.status(201).json(archivosAplicaciones);
            })
            .catch(next);
    });

    router.get('/archivoAplicacion/:id', (req, res, next) => {
        return servicios.ArchivoAplicacion.obtener(req.params.id)
            .then((archivosAplicaciones) => {
                return res.status(200).json(archivosAplicaciones);
            })
            .catch(next);
    });

    router.put('/archivoAplicacion/:id', (req, res, next) => {
        return servicios.ArchivoAplicacion.actualizar(req.params.id, req.body)
            .then((archivosAplicaciones) => {
                return res.status(200).json(archivosAplicaciones);
            })
            .catch(next);
    });

    router.delete('/archivoAplicacion/:id', (req, res, next) => {
        return servicios.ArchivoAplicacion.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
