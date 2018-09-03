module.exports = (router, servicios) => {

    router.get('/neg_creterios', (req, res, next) => {
        return servicios.negCriterios.listar()
            .then((NegCriterios) => {
                return res.status(200).json(NegCriterios);
            })
            .catch(next);
    });

    router.post('/neg_creterios', (req, res, next) => {
        return servicios.negCriterios.crear(req.body)
            .then((NegCriterios) => {
                return res.status(201).json(NegCriterios);
            })
            .catch(next);
    });

    router.get('/neg_creterios/:id', (req, res, next) => {
        return servicios.negCriterios.obtener(req.params.id)
            .then((NegCriterios) => {
                return res.status(200).json(NegCriterios);
            })
            .catch(next);
    });

    router.put('/neg_creterios/:id', (req, res, next) => {
        return servicios.negCriterios.actualizar(req.params.id, req.body)
            .then((NegCriterios) => {
                return res.status(200).json(NegCriterios);
            })
            .catch(next);
    });

    router.delete('/neg_creterios/:id', (req, res, next) => {
        return servicios.negCriterios.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
