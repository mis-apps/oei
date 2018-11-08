module.exports = (router, servicios) => {

    router.get('/criterio', (req, res, next) => {
        return servicios.Criterio.listar({activo: true})
            .then((criterios) => {
                return res.status(200).json(criterios);
            })
            .catch(next);
    });

    router.post('/criterio', (req, res, next) => {
        return servicios.Criterio.crear(req.body)
            .then((criterios) => {
                return res.status(201).json(criterios);
            })
            .catch(next);
    });

    router.get('/criterio/:id', (req, res, next) => {
        return servicios.Criterio.obtener(req.params.id)
            .then((criterios) => {
                return res.status(200).json(criterios);
            })
            .catch(next);
    });

    router.put('/criterio/:id', (req, res, next) => {
        return servicios.Criterio.actualizar(req.params.id, req.body)
            .then((criterios) => {
                return res.status(200).json(criterios);
            })
            .catch(next);
    });

    router.delete('/criterio/:id', (req, res, next) => {
        return servicios.Criterio.eliminar(req.params.id)
            .then(() => {
                return res.status(200).json({});
            })
            .catch(next);
    });

};
