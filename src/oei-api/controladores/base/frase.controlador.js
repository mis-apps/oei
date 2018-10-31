

module.exports=(router,servicios) => {

    router.get('/frase', (req,res,next)=>{
    return servicios.Frase.listar()
        .then((frases)=>{
            return res.status(200).json(frases);
        })
        .catch(next);
    });

    router.post('/frase', (req,res,next)=>{
        return servicios.Frase.crear(req.body)
            .then((frases)=>{
                return res.status(201).json(frases);
            })
            .catch(next);
    });

    router.get('/frase/:id', (req,res,next)=>{
        return servicios.Frase.obtener(req.params.id)
            .then((frases)=>{
                return res.status(200).json(frases);
            })
            .catch(next);
     });

     router.put('/frase/:id', (req,res,next)=>{
        return servicios.Frase.actualizar(req.params.id,req.body)
            .then((frases)=>{
                return res.status(200).json(frases);
            })
            .catch(next);
    });

    router.delete('/frase/:id', (req,res,next)=>{
        return servicios.Frase.eliminar(req.params.id)
            .then(()=>{
                return res.status(200).json({});
            })
            .catch(next);
        });


};