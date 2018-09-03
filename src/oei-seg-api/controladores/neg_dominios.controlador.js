module.exports = (router, servicios) => {

    router.get('/neg_dominios', (req, res, next) => {
        return servicios.negDominios.listar()
            .then((NegDominios) => {
                return res.status(200).json(NegDominios);
            })
            .catch(next);
    });

    router.post('/neg_dominios', (req, res, next) => {
        return servicios.negDominios.crear(req.body)
            .then((NegDominios) => {
                return res.status(201).json(NegDominios);
            })
            .catch(next);
    });

    router.get('/neg_dominios/:id', (req, res, next) => {
        return servicios.negDominios.obtener(req.params.id)
            .then((NegDominios) => {
                return res.status(200).json(NegDominios);
            })
            .catch(next);
    });

    router.put('/neg_dominios/:id', (req, res, next) => {
        return servicios.negDominios.actualizar(req.params.id, req.body)
            .then((NegDominios) => {
                return res.status(200).json(NegDominios);
            })
            .catch(next);
    });

    router.delete('/neg_dominios/:id', (req, res, next) => {
        return servicios.negDominios.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
