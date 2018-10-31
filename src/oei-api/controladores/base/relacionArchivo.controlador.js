module.exports = (router, servicios) => {

    router.get('/relacionArchivo', (req, res, next) => {
        return servicios.RelacionArchivo.listar()
            .then((relacionesArchivos) => {
                return res.status(200).json(relacionesArchivos);
            })
            .catch(next);
    });

    router.post('/relacionArchivo', (req, res, next) => {
        return servicios.RelacionArchivo.crear(req.body)
            .then((relacionesArchivos) => {
                return res.status(201).json(relacionesArchivos);
            })
            .catch(next);
    });

    router.get('/relacionArchivo/:id', (req, res, next) => {
        return servicios.RelacionArchivo.obtener(req.params.id)
            .then((relacionesArchivos) => {
                return res.status(200).json(relacionesArchivos);
            })
            .catch(next);
    });

    router.put('/relacionArchivo/:id', (req, res, next) => {
        return servicios.RelacionArchivo.actualizar(req.params.id, req.body)
            .then((relacionesArchivos) => {
                return res.status(200).json(relacionesArchivos);
            })
            .catch(next);
    });

    router.delete('/relacionArchivo/:id', (req, res, next) => {
        return servicios.RelacionArchivo.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
