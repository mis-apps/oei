
module.exports = (router, servicios) => {

    router.get('/fraseArchivo', (req, res, next) => {
        return servicios.FraseArchivo.listar()
            .then((frasesArchivos) => {
                return res.status(200).json(frasesArchivos);
            })
            .catch(next);
    });

    router.post('/fraseArchivo', (req, res, next) => {
        return servicios.FraseArchivo.crear(req.body)
            .then((frasesArchivos) => {
                return res.status(201).json(frasesArchivos);
            })
            .catch(next);
    });

    router.get('/fraseArchivo/:id', (req, res, next) => {
        return servicios.FraseArchivo.obtener(req.params.id)
            .then((frasesArchivos) => {
                return res.status(200).json(frasesArchivos);
            })
            .catch(next);
    });

    router.put('/fraseArchivo/:id', (req, res, next) => {
        return servicios.FraseArchivo.actualizar(req.params.id, req.body)
            .then((frasesArchivos) => {
                return res.status(200).json(frasesArchivos);
            })
            .catch(next);
    });

    router.delete('/fraseArchivo/:id', (req, res, next) => {
        return servicios.FraseArchivo.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
