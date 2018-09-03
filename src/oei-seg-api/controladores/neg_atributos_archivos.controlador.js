module.exports = (router, servicios) => {

    router.get('/neg_atributos_archivos', (req, res, next) => {
        return servicios.negAtributosArchivos.listar()
            .then((NegAtributosArchivos) => {
                return res.status(200).json(NegAtributosArchivos);
            })
            .catch(next);
    });

    router.post('/neg_atributos_archivos', (req, res, next) => {
        return servicios.negAtributosArchivos.crear(req.body)
            .then((NegAtributosArchivos) => {
                return res.status(201).json(NegAtributosArchivos);
            })
            .catch(next);
    });

    router.get('/neg_atributos_archivos/:id', (req, res, next) => {
        return servicios.negAtributosArchivos.obtener(req.params.id)
            .then((NegAtributosArchivos) => {
                return res.status(200).json(NegAtributosArchivos);
            })
            .catch(next);
    });

    router.put('/neg_atributos_archivos/:id', (req, res, next) => {
        return servicios.negAtributosArchivos.actualizar(req.params.id, req.body)
            .then((NegAtributosArchivos) => {
                return res.status(200).json(NegAtributosArchivos);
            })
            .catch(next);
    });

    router.delete('/neg_atributos_archivos/:id', (req, res, next) => {
        return servicios.negAtributosArchivos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
