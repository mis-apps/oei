module.exports = (router, servicios) => {

    router.get('/locutor', (req, res, next) => {
        return servicios.Locutor.listar()
            .then((locutores) => {
                return res.status(200).json(locutores);
            })
            .catch(next);
    });

    router.post('/locutor', (req, res, next) => {
        return servicios.Locutor.crear(req.body)
            .then((locutores) => {
                return res.status(201).json(locutores);
            })
            .catch(next);
    });

    router.get('/locutor/:id', (req, res, next) => {
        return servicios.Locutor.obtener(req.params.id)
            .then((locutores) => {
                return res.status(200).json(locutores);
            })
            .catch(next);
    });

    router.put('/locutor/:id', (req, res, next) => {
        return servicios.Locutor.actualizar(req.params.id, req.body)
            .then((locutores) => {
                return res.status(200).json(locutores);
            })
            .catch(next);
    });

    router.delete('/locutor/:id', (req, res, next) => {
        return servicios.Locutor.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
