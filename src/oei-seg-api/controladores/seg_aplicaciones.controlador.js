module.exports = (router, servicios) => {

    router.get('/seg_aplicaciones', (req, res, next) => {
        return servicios.segAplicaciones.listar()
            .then((SegAplicaciones) => {
                return res.status(200).json(SegAplicaciones);
            })
            .catch(next);
    });

    router.post('/seg_aplicaciones', (req, res, next) => {
        return servicios.segAplicaciones.crear(req.body)
            .then((SegAplicaciones) => {
                return res.status(201).json(SegAplicaciones);
            })
            .catch(next);
    });

    router.get('/seg_aplicaciones/:id', (req, res, next) => {
        return servicios.segAplicaciones.obtener(req.params.id)
            .then((SegAplicaciones) => {
                return res.status(200).json(SegAplicaciones);
            })
            .catch(next);
    });

    router.put('/seg_aplicaciones/:id', (req, res, next) => {
        return servicios.segAplicaciones.actualizar(req.params.id, req.body)
            .then((SegAplicaciones) => {
                return res.status(200).json(SegAplicaciones);
            })
            .catch(next);
    });

    router.delete('/seg_aplicaciones/:id', (req, res, next) => {
        return servicios.segAplicaciones.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
