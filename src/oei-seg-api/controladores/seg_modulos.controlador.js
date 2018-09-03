module.exports = (router, servicios) => {

    router.get('/seg_modulos', (req, res, next) => {
        return servicios.segModulos.listar()
            .then((SegModulos) => {
                return res.status(200).json(SegModulos);
            })
            .catch(next);
    });

    router.post('/seg_modulos', (req, res, next) => {
        return servicios.segModulos.crear(req.body)
            .then((SegModulos) => {
                return res.status(201).json(SegModulos);
            })
            .catch(next);
    });

    router.get('/seg_modulos/:id', (req, res, next) => {
        return servicios.segModulos.obtener(req.params.id)
            .then((SegModulos) => {
                return res.status(200).json(SegModulos);
            })
            .catch(next);
    });

    router.put('/seg_modulos/:id', (req, res, next) => {
        return servicios.segModulos.actualizar(req.params.id, req.body)
            .then((SegModulos) => {
                return res.status(200).json(SegModulos);
            })
            .catch(next);
    });

    router.delete('/seg_modulos/:id', (req, res, next) => {
        return servicios.segModulos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
