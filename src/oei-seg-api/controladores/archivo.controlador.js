module.exports = (router, servicios) => {

    router.get('/archivo', (req, res, next) => {
        return servicios.Archivo.listar()
            .then((archivos) => {
                return res.status(200).json(archivos);
            })
            .catch(next);
    });

    router.post('/archivo', (req, res, next) => {
        return servicios.Archivo.crear(req.body)
            .then((archivos) => {
                return res.status(201).json(archivos);
            })
            .catch(next);
    });

    router.get('/archivo/:id', (req, res, next) => {
        return servicios.Archivo.obtener(req.params.id)
            .then((archivos) => {
                return res.status(200).json(archivos);
            })
            .catch(next);
    });

    router.put('/archivo/:id', (req, res, next) => {
        return servicios.Archivo.actualizar(req.params.id, req.body)
            .then((archivos) => {
                return res.status(200).json(archivos);
            })
            .catch(next);
    });

    router.delete('/archivo/:id', (req, res, next) => {
        return servicios.Archivo.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
