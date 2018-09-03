module.exports = (router, servicios) => {

    router.get('/neg_archivos', (req, res, next) => {
        return servicios.negArchivos.listar()
            .then((NegArchivos) => {
                return res.status(200).json(NegArchivos);
            })
            .catch(next);
    });

    router.post('/neg_archivos', (req, res, next) => {
        return servicios.negArchivos.crear(req.body)
            .then((NegArchivos) => {
                return res.status(201).json(NegArchivos);
            })
            .catch(next);
    });

    router.get('/neg_archivos/:id', (req, res, next) => {
        return servicios.negArchivos.obtener(req.params.id)
            .then((NegArchivos) => {
                return res.status(200).json(NegArchivos);
            })
            .catch(next);
    });

    router.put('/neg_archivos/:id', (req, res, next) => {
        return servicios.negArchivos.actualizar(req.params.id, req.body)
            .then((NegArchivos) => {
                return res.status(200).json(NegArchivos);
            })
            .catch(next);
    });

    router.delete('/neg_archivos/:id', (req, res, next) => {
        return servicios.negArchivos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
