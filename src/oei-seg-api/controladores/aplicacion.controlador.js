module.exports = (router, servicios) => {

    router.get('/aplicacion', (req, res, next) => {
        return servicios.Aplicacion.listar()
            .then((aplicaciones) => {
                return res.status(200).json(aplicaciones);
            })
            .catch(next);
    });

};
