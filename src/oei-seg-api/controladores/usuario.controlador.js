module.exports = (router, servicios) => {

    router.get('/usuario', (req, res, next) => {
        return servicios.Usuario.listar()
            .then((usuarios) => {
                return res.status(200).json(usuarios);
            })
            .catch(next);
    });

    router.post('/usuario', (req, res, next) => {
        return servicios.Usuario.crear(req.body)
            .then((usuarios) => {
                return res.status(201).json(usuarios);
            })
            .catch(next);
    });

    router.get('/usuario/:id', (req, res, next) => {
        return servicios.Usuario.obtener(req.params.id)
            .then((usuarios) => {
                return res.status(200).json(usuarios);
            })
            .catch(next);
    });

    router.put('/usuario/:id', (req, res, next) => {
        return servicios.Usuario.actualizar(req.params.id, req.body)
            .then((usuarios) => {
                return res.status(200).json(usuarios);
            })
            .catch(next);
    });

    router.delete('/usuario/:id', (req, res, next) => {
        return servicios.Usuario.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
