module.exports = (router, servicios) => {

    router.get('/palabra', (req, res, next) => {
        return servicios.Palabra.listar()
            .then((palabras) => {
                return res.status(200).json(palabras);
            })
            .catch(next);
    });

    router.post('/palabra', (req, res, next) => {
        return servicios.Palabra.crear(req.body)
            .then((palabras) => {
                return res.status(201).json(palabras);
            })
            .catch(next);
    });

    router.get('/palabra/:id', (req, res, next) => {
        return servicios.Palabra.obtener(req.params.id)
            .then((palabras) => {
                return res.status(200).json(palabras);
            })
            .catch(next);
    });

    router.put('/palabra/:id', (req, res, next) => {
        return servicios.Palabra.actualizar(req.params.id, req.body)
            .then((palabras) => {
                return res.status(200).json(palabras);
            })
            .catch(next);
    });

    router.delete('/palabra/:id', (req, res, next) => {
        return servicios.Palabra.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
