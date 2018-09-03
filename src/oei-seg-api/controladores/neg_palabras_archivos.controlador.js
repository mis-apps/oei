module.exports = (router, servicios) => {

    router.get('/neg_palabras_archivos', (req, res, next) => {
        return servicios.negPalabrasArchivos.listar()
            .then((NegPalabrasArchivos) => {
                return res.status(200).json(NegPalabrasArchivos);
            })
            .catch(next);
    });

    router.post('/neg_palabras_archivos', (req, res, next) => {
        return servicios.negPalabrasArchivos.crear(req.body)
            .then((NegPalabrasArchivos) => {
                return res.status(201).json(NegPalabrasArchivos);
            })
            .catch(next);
    });

    router.get('/neg_palabras_archivos/:id', (req, res, next) => {
        return servicios.negPalabrasArchivos.obtener(req.params.id)
            .then((NegPalabrasArchivos) => {
                return res.status(200).json(NegPalabrasArchivos);
            })
            .catch(next);
    });

    router.put('/neg_palabras_archivos/:id', (req, res, next) => {
        return servicios.negPalabrasArchivos.actualizar(req.params.id, req.body)
            .then((NegPalabrasArchivos) => {
                return res.status(200).json(NegPalabrasArchivos);
            })
            .catch(next);
    });

    router.delete('/neg_palabras_archivos/:id', (req, res, next) => {
        return servicios.negPalabrasArchivos.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
