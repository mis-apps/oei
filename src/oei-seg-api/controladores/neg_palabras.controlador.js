module.exports = (router, servicios) => {

    router.get('/neg_palabras', (req, res, next) => {
        return servicios.negPalabras.listar()
            .then((NegPalabras) => {
                return res.status(200).json(NegPalabras);
            })
            .catch(next);
    });

    router.post('/neg_palabras', (req, res, next) => {
        return servicios.negPalabras.crear(req.body)
            .then((NegPalabras) => {
                return res.status(201).json(NegPalabras);
            })
            .catch(next);
    });

    router.get('/neg_palabras/:id', (req, res, next) => {
        return servicios.negPalabras.obtener(req.params.id)
            .then((NegPalabras) => {
                return res.status(200).json(NegPalabras);
            })
            .catch(next);
    });

    router.put('/neg_palabras/:id', (req, res, next) => {
        return servicios.negPalabras.actualizar(req.params.id, req.body)
            .then((NegPalabras) => {
                return res.status(200).json(NegPalabras);
            })
            .catch(next);
    });

    router.delete('/neg_palabras/:id', (req, res, next) => {
        return servicios.negPalabras.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
