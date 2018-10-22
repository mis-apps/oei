module.exports = (router, servicios) => {

    router.post('/login', (req, res, next) => {
        //let respuesta = servicios.Login.autenticar(req.body);
        let params = req.body;
        let username = params.username;
        let password = params.password;
        console.log('REQUEST: ' + JSON.stringify(params));

        const usuarioResponse = servicios.Usuario.encontrarUno(params);

        Promise.all([usuarioResponse])
            .then(response => {
                let usuario = response[0];
                
                const personaResponse = servicios.Persona.obtener(usuario.idPersona);
                const rolUsuarioResponse = servicios.UsuarioRol.listar({idUsuario: usuario.id});

                Promise.all([personaResponse, rolUsuarioResponse])
                    .then(responses => {
                        let persona = responses[0];
                        let usuariosRoles = responses[1];

                        console.log('ssssss: ' + JSON.stringify(usuariosRoles));

                        let jsonResponse;
                        if (usuario) {
                            jsonResponse = {
                                success: true,
                                data: {
                                    username: username,
                                    idUsuario: usuario.id,
                                    idPersona: usuario.idPersona,
                                    nombrePersona: `${persona.nombres} ${persona.primerApellido} ${persona.segundoApellido}`,
                                    roles: rolUsuarioResponse, //JSON.stringify(usuariosRoles)
                                }
                            };
                        } else {
                            jsonResponse = {
                                success: false,
                                message: 'Usuario y/o Contraseña no válidos.'
                            };
                        }
                        console.log('s' + jsonResponse);

                        return res.status(200).json(jsonResponse);

                    })
                    .catch(error => {});
            })
            .catch(err => {});

    });

};