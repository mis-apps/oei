module.exports = (router, servicios) => {

    router.get('/neg_archivos_aplicaciones', (req, res, next) => {
        return servicios.negArchivosAplicaciones.listar()
            .then((NegArchivosAplicaciones) => {
                return res.status(200).json(NegArchivosAplicaciones);
            })
            .catch(next);
    });

    router.post('/neg_archivos_aplicaciones', (req, res, next) => {
        return servicios.negArchivosAplicaciones.crear(req.body)
            .then((NegArchivosAplicaciones) => {
                return res.status(201).json(NegArchivosAplicaciones);
            })
            .catch(next);
    });

    router.get('/neg_archivos_aplicaciones/:id', (req, res, next) => {
        return servicios.negArchivosAplicaciones.obtener(req.params.id)
            .then((NegArchivosAplicaciones) => {
                return res.status(200).json(NegArchivosAplicaciones);
            })
            .catch(next);
    });

    router.put('/neg_archivos_aplicaciones/:id', (req, res, next) => {
        return servicios.negArchivosAplicaciones.actualizar(req.params.id, req.body)
            .then((NegArchivosAplicaciones) => {
                return res.status(200).json(NegArchivosAplicaciones);
            })
            .catch(next);
    });

    router.delete('/neg_archivos_aplicaciones/:id', (req, res, next) => {
        return servicios.negArchivosAplicaciones.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
