module.exports = (router, servicios) => {

    router.get('/neg_relaciones_archivos', (req, res, next) => {
        return servicios.negRelacionesArchivos.listar()
            .then((NegRelacionesArchivos) => {
                return res.status(200).json(NegRelacionesArchivos);
            })
            .catch(next);
    });

    router.post('/neg_relaciones_archivos', (req, res, next) => {
        return servicios.negRelacionesArchivos.crear(req.body)
            .then((NegRelacionesArchivos) => {
                return res.status(201).json(NegRelacionesArchivos);
            })
            .catch(next);
    });

    router.get('/neg_relaciones_archivos/:id', (req, res, next) => {
        return servicios.negRelacionesArchivos.obtener(req.params.id)
            .then((NegRelacionesArchivos) => {
                return res.status(200).json(NegRelacionesArchivos);
            })
            .catch(next);
    });

    router.put('/neg_relaciones_archivos/:id', (req, res, next) => {
        return servicios.negRelacionesArchivos.actualizar(req.params.id, req.body)
            .then((NegRelacionesArchivos) => {
                return res.status(200).json(NegRelacionesArchivos);
            })
            .catch(next);
    });

    router.delete('/neg_relaciones_archivos/:id', (req, res, next) => {
        return servicios.negRelacionesArchivos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
