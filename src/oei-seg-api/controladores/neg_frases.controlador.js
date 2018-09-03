

module.exports=(router,servicios) => {

    router.get('/neg_frases', (req,res,next)=>{
    return servicios.negFrases.listar()
        .then((NegFrases)=>{
            return res.status(200).json(NegFrases);
        })
        .catch(next);
    });

    router.post('/neg_frases', (req,res,next)=>{
        return servicios.negFrases.crear(req.body)
            .then((NegFrases)=>{
                return res.status(201).json(NegFrases);
            })
            .catch(next);
    });

    router.get('/neg_frases/:id', (req,res,next)=>{
        return servicios.negFrases.obtener(req.params.id)
            .then((NegFrases)=>{
                return res.status(200).json(NegFrases);
            })
            .catch(next);
     });

     router.put('/neg_frases/:id', (req,res,next)=>{
        return servicios.negFrases.actualizar(req.params.id,req.body)
            .then((Neg_frases)=>{
                return res.status(200).json(Neg_frases);
            })
            .catch(next);
    });

    router.delete('/neg_frases/:id', (req,res,next)=>{
        return servicios.negFrases.eliminar(req.params.id)
            .then(()=>{
                return res.status(200).json({});
            })
            .catch(next);
        });


};