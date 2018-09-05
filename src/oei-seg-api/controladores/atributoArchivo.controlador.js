module.exports = (router, servicios) => {

    router.get('/atributoArchivo', (req, res, next) => {
        return servicios.AtributoArchivo.listar()
            .then((atributosArchivos) => {
                return res.status(200).json(atributosArchivos);
            })
            .catch(next);
    });

    router.post('/atributoArchivo', (req, res, next) => {
        return servicios.AtributoArchivo.crear(req.body)
            .then((atributosArchivos) => {
                return res.status(201).json(atributosArchivos);
            })
            .catch(next);
    });

    router.get('/atributoArchivo/:id', (req, res, next) => {
        return servicios.AtributoArchivo.obtener(req.params.id)
            .then((atributosArchivos) => {
                return res.status(200).json(atributosArchivos);
            })
            .catch(next);
    });

    router.put('/atributoArchivo/:id', (req, res, next) => {
        return servicios.AtributoArchivo.actualizar(req.params.id, req.body)
            .then((atributosArchivos) => {
                return res.status(200).json(atributosArchivos);
            })
            .catch(next);
    });

    router.delete('/atributoArchivo/:id', (req, res, next) => {
        return servicios.AtributoArchivo.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
