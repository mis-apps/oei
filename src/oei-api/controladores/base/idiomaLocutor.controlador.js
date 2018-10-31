module.exports = (router, servicios) => {

    router.get('/idiomaLocutor', (req, res, next) => {
        return servicios.IdiomaLocutor.listar()
            .then((idiomasLocutores) => {
                return res.status(200).json(idiomasLocutores);
            })
            .catch(next);
    });

    router.post('/idiomaLocutor', (req, res, next) => {
        return servicios.IdiomaLocutor.crear(req.body)
            .then((idiomasLocutores) => {
                return res.status(201).json(idiomasLocutores);
            })
            .catch(next);
    });

    router.get('/idiomaLocutor/:id', (req, res, next) => {
        return servicios.IdiomaLocutor.obtener(req.params.id)
            .then((idiomasLocutores) => {
                return res.status(200).json(idiomasLocutores);
            })
            .catch(next);
    });

    router.put('/idiomaLocutor/:id', (req, res, next) => {
        return servicios.IdiomaLocutor.actualizar(req.params.id, req.body)
            .then((idiomasLocutores) => {
                return res.status(200).json(idiomasLocutores);
            })
            .catch(next);
    });

    router.delete('/idiomaLocutor/:id', (req, res, next) => {
        return servicios.IdiomaLocutor.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
