module.exports = (router, servicios) => {

    router.get('/neg_idiomas_locutores', (req, res, next) => {
        return servicios.negIdiomasLocutores.listar()
            .then((NegIdiomasLocutores) => {
                return res.status(200).json(NegIdiomasLocutores);
            })
            .catch(next);
    });

    router.post('/neg_idiomas_locutores', (req, res, next) => {
        return servicios.negIdiomasLocutores.crear(req.body)
            .then((NegIdiomasLocutores) => {
                return res.status(201).json(NegIdiomasLocutores);
            })
            .catch(next);
    });

    router.get('/neg_idiomas_locutores/:id', (req, res, next) => {
        return servicios.negIdiomasLocutores.obtener(req.params.id)
            .then((NegIdiomasLocutores) => {
                return res.status(200).json(NegIdiomasLocutores);
            })
            .catch(next);
    });

    router.put('/neg_idiomas_locutores/:id', (req, res, next) => {
        return servicios.negIdiomasLocutores.actualizar(req.params.id, req.body)
            .then((NegIdiomasLocutores) => {
                return res.status(200).json(NegIdiomasLocutores);
            })
            .catch(next);
    });

    router.delete('/neg_idiomas_locutores/:id', (req, res, next) => {
        return servicios.negIdiomasLocutores.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
