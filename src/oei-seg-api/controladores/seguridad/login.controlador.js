module.exports = (router, modelos) => {

    router.post('/login', (req, res, next) => {
        return modelos.Usuario.findOne({
            where: req.body,
            include: [
                {model: modelos.UsuarioPermiso, as: 'permisos'},
                {model: modelos.Persona, as: 'persona'},
            ]
        }).then(usuario => {
            let resultado = {};
            if(usuario) {
                resultado.success = true;
                resultado.data = {
                    username: usuario.username,
                    idUsuario: usuario.id,
                    idPersona: usuario.persona.id,
                    nombrePersona: `${usuario.persona.nombres} ${usuario.persona.primerApellido} ${usuario.persona.segundoApellido}`,
                    modulos: usuario.permisos.map(permiso => {
                        return Object.assign(
                          {},
                          {
                            posicionModulo: permiso.posicionModulo,
                            modulo: permiso.modulo,
                            posicionRecurso: permiso.posicionRecurso,
                            recurso: permiso.recurso,
                            titulo: permiso.titulo,
                            esMenu: permiso.esMenu,
                            puedeCrear: permiso.lectura,
                            puedeModificar: permiso.modificacion,
                            puedeEliminar: permiso.eliminacion
                          }
                        )
                    })
                };
            } else {
                resultado = {
                    success: false,
                    message: 'Usuario y/o Contraseña no válidos.'
                };
            }
            return res.status(200).json(resultado);
        });

    });

};