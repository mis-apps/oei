module.exports = (router, servicios) => {

    router.get('/neg_frases_archivos', (req, res, next) => {
        return servicios.negFrasesArchivos.listar()
            .then((NegFrasesArchivos) => {
                return res.status(200).json(NegFrasesArchivos);
            })
            .catch(next);
    });

    router.post('/neg_frases_archivos', (req, res, next) => {
        return servicios.negFrasesArchivos.crear(req.body)
            .then((NegFrasesArchivos) => {
                return res.status(201).json(NegFrasesArchivos);
            })
            .catch(next);
    });

    router.get('/neg_frases_archivos/:id', (req, res, next) => {
        return servicios.negFrasesArchivos.obtener(req.params.id)
            .then((NegFrasesArchivos) => {
                return res.status(200).json(NegFrasesArchivos);
            })
            .catch(next);
    });

    router.put('/neg_frases_archivos/:id', (req, res, next) => {
        return servicios.negFrasesArchivos.actualizar(req.params.id, req.body)
            .then((NegFrasesArchivos) => {
                return res.status(200).json(NegFrasesArchivos);
            })
            .catch(next);
    });

    router.delete('/neg_frases_archivos/:id', (req, res, next) => {
        return servicios.negFrasesArchivos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
