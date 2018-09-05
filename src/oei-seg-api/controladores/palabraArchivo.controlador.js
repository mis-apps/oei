module.exports = (router, servicios) => {

    router.get('/palabraArchivo', (req, res, next) => {
        return servicios.PalabraArchivo.listar()
            .then((palabrasArchivos) => {
                return res.status(200).json(palabrasArchivos);
            })
            .catch(next);
    });

    router.post('/palabraArchivo', (req, res, next) => {
        return servicios.PalabraArchivo.crear(req.body)
            .then((palabrasArchivos) => {
                return res.status(201).json(palabrasArchivos);
            })
            .catch(next);
    });

    router.get('/palabraArchivo/:id', (req, res, next) => {
        return servicios.PalabraArchivo.obtener(req.params.id)
            .then((palabrasArchivos) => {
                return res.status(200).json(palabrasArchivos);
            })
            .catch(next);
    });

    router.put('/palabraArchivo/:id', (req, res, next) => {
        return servicios.PalabraArchivo.actualizar(req.params.id, req.body)
            .then((palabrasArchivos) => {
                return res.status(200).json(palabrasArchivos);
            })
            .catch(next);
    });

    router.delete('/palabraArchivo/:id', (req, res, next) => {
        return servicios.PalabraArchivo.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
