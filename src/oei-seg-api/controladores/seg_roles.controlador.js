module.exports = (router, servicios) => {

    router.get('/seg_roles', (req, res, next) => {
        return servicios.segRoles.listar()
            .then((SegRoles) => {
                return res.status(200).json(SegRoles);
            })
            .catch(next);
    });

    router.post('/seg_roles', (req, res, next) => {
        return servicios.segRoles.crear(req.body)
            .then((SegRoles) => {
                return res.status(201).json(SegRoles);
            })
            .catch(next);
    });

    router.get('/seg_roles/:id', (req, res, next) => {
        return servicios.segRoles.obtener(req.params.id)
            .then((SegRoles) => {
                return res.status(200).json(SegRoles);
            })
            .catch(next);
    });

    router.put('/seg_roles/:id', (req, res, next) => {
        return servicios.segRoles.actualizar(req.params.id, req.body)
            .then((SegRoles) => {
                return res.status(200).json(SegRoles);
            })
            .catch(next);
    });

    router.delete('/seg_roles/:id', (req, res, next) => {
        return servicios.segRoles.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
