module.exports = (router, servicios) => {

    router.get('/archivoLocutor', (req, res, next) => {
        return servicios.ArchivoLocutor.listar()
            .then((archivosLocutores) => {
                return res.status(200).json(archivosLocutores);
            })
            .catch(next);
    });

    router.post('/archivoLocutor', (req, res, next) => {
        return servicios.ArchivoLocutor.crear(req.body)
            .then((archivosLocutores) => {
                return res.status(201).json(archivosLocutores);
            })
            .catch(next);
    });

    router.get('/archivoLocutor/:id', (req, res, next) => {
        return servicios.ArchivoLocutor.obtener(req.params.id)
            .then((archivosLocutores) => {
                return res.status(200).json(archivosLocutores);
            })
            .catch(next);
    });

    router.put('/archivoLocutor/:id', (req, res, next) => {
        return servicios.ArchivoLocutor.actualizar(req.params.id, req.body)
            .then((archivosLocutores) => {
                return res.status(200).json(archivosLocutores);
            })
            .catch(next);
    });

    router.delete('/archivoLocutor/:id', (req, res, next) => {
        return servicios.ArchivoLocutor.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
