module.exports = (router, servicios) => {

    router.get('/seg_usuarios_roles', (req, res, next) => {
        return servicios.segUsuariosRoles.listar()
            .then((SegUsuariosRoles) => {
                return res.status(200).json(SegUsuariosRoles);
            })
            .catch(next);
    });

    router.post('/seg_usuarios_roles', (req, res, next) => {
        return servicios.segUsuariosRoles.crear(req.body)
            .then((SegUsuariosRoles) => {
                return res.status(201).json(SegUsuariosRoles);
            })
            .catch(next);
    });

    router.get('/seg_usuarios_roles/:id', (req, res, next) => {
        return servicios.segUsuariosRoles.obtener(req.params.id)
            .then((SegUsuariosRoles) => {
                return res.status(200).json(SegUsuariosRoles);
            })
            .catch(next);
    });

    router.put('/seg_usuarios_roles/:id', (req, res, next) => {
        return servicios.segUsuariosRoles.actualizar(req.params.id, req.body)
            .then((SegUsuariosRoles) => {
                return res.status(200).json(SegUsuariosRoles);
            })
            .catch(next);
    });

    router.delete('/seg_usuarios_roles/:id', (req, res, next) => {
        return servicios.segUsuariosRoles.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
