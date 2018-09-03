module.exports = (router, servicios) => {

    router.get('/neg_archivos_locutores', (req, res, next) => {
        return servicios.negArchivosLocutores.listar()
            .then((NegArchivosLocutores) => {
                return res.status(200).json(NegArchivosLocutores);
            })
            .catch(next);
    });

    router.post('/neg_archivos_locutores', (req, res, next) => {
        return servicios.negArchivosLocutores.crear(req.body)
            .then((NegArchivosLocutores) => {
                return res.status(201).json(NegArchivosLocutores);
            })
            .catch(next);
    });

    router.get('/neg_archivos_locutores/:id', (req, res, next) => {
        return servicios.negArchivosLocutores.obtener(req.params.id)
            .then((NegArchivosLocutores) => {
                return res.status(200).json(NegArchivosLocutores);
            })
            .catch(next);
    });

    router.put('/neg_archivos_locutores/:id', (req, res, next) => {
        return servicios.negArchivosLocutores.actualizar(req.params.id, req.body)
            .then((NegArchivosLocutores) => {
                return res.status(200).json(NegArchivosLocutores);
            })
            .catch(next);
    });

    router.delete('/neg_archivos_locutores/:id', (req, res, next) => {
        return servicios.negArchivosLocutores.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
