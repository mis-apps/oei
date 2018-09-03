module.exports = (router, servicios) => {

    router.get('/seg_roles_recursos', (req, res, next) => {
        return servicios.segRolesRecursos.listar()
            .then((SegRolesRecursos) => {
                return res.status(200).json(SegRolesRecursos);
            })
            .catch(next);
    });

    router.post('/seg_roles_recursos', (req, res, next) => {
        return servicios.segRolesRecursos.crear(req.body)
            .then((SegRolesRecursos) => {
                return res.status(201).json(SegRolesRecursos);
            })
            .catch(next);
    });

    router.get('/seg_roles_recursos/:id', (req, res, next) => {
        return servicios.segRolesRecursos.obtener(req.params.id)
            .then((SegRolesRecursos) => {
                return res.status(200).json(SegRolesRecursos);
            })
            .catch(next);
    });

    router.put('/seg_roles_recursos/:id', (req, res, next) => {
        return servicios.segRolesRecursos.actualizar(req.params.id, req.body)
            .then((SegRolesRecursos) => {
                return res.status(200).json(SegRolesRecursos);
            })
            .catch(next);
    });

    router.delete('/seg_roles_recursos/:id', (req, res, next) => {
        return servicios.segRolesRecursos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
