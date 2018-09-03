module.exports = (router, servicios) => {

    router.get('/seg_usuarios', (req, res, next) => {
        return servicios.segUsuarios.listar()
            .then((SegUsuarios) => {
                return res.status(200).json(SegUsuarios);
            })
            .catch(next);
    });

    router.post('/seg_usuarios', (req, res, next) => {
        return servicios.segUsuarios.crear(req.body)
            .then((SegUsuarios) => {
                return res.status(201).json(SegUsuarios);
            })
            .catch(next);
    });

    router.get('/seg_usuarios/:id', (req, res, next) => {
        return servicios.segUsuarios.obtener(req.params.id)
            .then((SegUsuarios) => {
                return res.status(200).json(SegUsuarios);
            })
            .catch(next);
    });

    router.put('/seg_usuarios/:id', (req, res, next) => {
        return servicios.segUsuarios.actualizar(req.params.id, req.body)
            .then((SegUsuarios) => {
                return res.status(200).json(SegUsuarios);
            })
            .catch(next);
    });

    router.delete('/seg_usuarios/:id', (req, res, next) => {
        return servicios.segUsuarios.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
