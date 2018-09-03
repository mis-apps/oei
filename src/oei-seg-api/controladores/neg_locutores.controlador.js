module.exports = (router, servicios) => {

    router.get('/neg_locutores', (req, res, next) => {
        return servicios.negLocutores.listar()
            .then((NegLocutores) => {
                return res.status(200).json(NegLocutores);
            })
            .catch(next);
    });

    router.post('/neg_locutores', (req, res, next) => {
        return servicios.negLocutores.crear(req.body)
            .then((NegLocutores) => {
                return res.status(201).json(NegLocutores);
            })
            .catch(next);
    });

    router.get('/neg_locutores/:id', (req, res, next) => {
        return servicios.negLocutores.obtener(req.params.id)
            .then((NegLocutores) => {
                return res.status(200).json(NegLocutores);
            })
            .catch(next);
    });

    router.put('/neg_locutores/:id', (req, res, next) => {
        return servicios.negLocutores.actualizar(req.params.id, req.body)
            .then((NegLocutores) => {
                return res.status(200).json(NegLocutores);
            })
            .catch(next);
    });

    router.delete('/neg_locutores/:id', (req, res, next) => {
        return servicios.negLocutores.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
