module.exports = (router, servicios) => {

    router.get('/dominio', (req, res, next) => {
        return servicios.Dominio.listar()
            .then((dominios) => {
                return res.status(200).json(dominios);
            })
            .catch(next);
    });

    router.post('/dominio', (req, res, next) => {
        return servicios.Dominio.crear(req.body)
            .then((dominios) => {
                return res.status(201).json(dominios);
            })
            .catch(next);
    });

    router.get('/dominio/:id', (req, res, next) => {
        return servicios.Dominio.obtener(req.params.id)
            .then((dominios) => {
                return res.status(200).json(dominios);
            })
            .catch(next);
    });

    router.put('/dominio/:id', (req, res, next) => {
        return servicios.Dominio.actualizar(req.params.id, req.body)
            .then((dominios) => {
                return res.status(200).json(dominios);
            })
            .catch(next);
    });

    router.delete('/dominio/:id', (req, res, next) => {
        return servicios.Dominio.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
