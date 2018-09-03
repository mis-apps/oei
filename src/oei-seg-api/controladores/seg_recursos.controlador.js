module.exports = (router, servicios) => {

    router.get('/seg_recursos', (req, res, next) => {
        return servicios.segRecursos.listar()
            .then((SegRecursos) => {
                return res.status(200).json(SegRecursos);
            })
            .catch(next);
    });

    router.post('/seg_recursos', (req, res, next) => {
        return servicios.segRecursos.crear(req.body)
            .then((SegRecursos) => {
                return res.status(201).json(SegRecursos);
            })
            .catch(next);
    });

    router.get('/seg_recursos/:id', (req, res, next) => {
        return servicios.segRecursos.obtener(req.params.id)
            .then((SegRecursos) => {
                return res.status(200).json(SegRecursos);
            })
            .catch(next);
    });

    router.put('/seg_recursos/:id', (req, res, next) => {
        return servicios.segRecursos.actualizar(req.params.id, req.body)
            .then((SegRecursos) => {
                return res.status(200).json(SegRecursos);
            })
            .catch(next);
    });

    router.delete('/seg_recursos/:id', (req, res, next) => {
        return servicios.segRecursos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
