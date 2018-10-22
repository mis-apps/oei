module.exports = (servicios, modelos) => {

    const LoginServicio = {};

    // metodos Reposito


    LoginServicio.autenticar = (params) => {
        let username = params.username;
        let password = params.password;
        console.log('REQUEST: ' + JSON.stringify(params));
        let promiseComplete = false;
        let jsonResponse;

        let ff = servicios.Usuario.encontrarUno(params)
            .then( (usuario) => {
                
                if (usuario) {
                    jsonResponse = {
                        success: true,
                        username: username,
                        idUsuario: usuario.id,
                        idPersona: usuario.persona.id
                    };
                } else {
                    jsonResponse = {
                        success: false,
                        message: 'Usuario y/o Contraseña no válidos.'
                    };
                }
                console.log('s' + jsonResponse);
                promiseComplete = true;
                return jsonResponse;
            });

        while (!promiseComplete) {
            if(promiseComplete) {
                return jsonResponse;
            }
        }
        


        if (username && (username != "") && (username == password)) {
            jsonResponse = {
                success: true,
                data: {
                    username: username,
                    idUsuario: 123,
                    idPersona: 100,
                    nombrePersona: 'JUAN PEREZ LOPEZ',
                    roles: [{
                            codigo: 'ADMIN',
                            nombre: 'Super Usuario'
                        },
                        {
                            codigo: 'OPERADOR',
                            nombre: 'Operador'
                        },
                        {
                            codigo: 'CONSULTA',
                            nombre: 'Consultas y Reportes'
                        }
                    ],
                    modulos: [{
                            nombre: 'Administración',
                            recursos: [{
                                    nombre: 'roles',
                                    titulo: 'Roles',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                },
                                {
                                    nombre: 'usuarios',
                                    titulo: 'Usuarios',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                },
                                {
                                    nombre: 'recursos',
                                    titulo: 'Recursos',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                }
                            ]
                        },
                        {
                            nombre: 'Configuración',
                            recursos: [{
                                    nombre: 'parametros',
                                    titulo: 'Parámetros',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                },
                                {
                                    nombre: 'criterios',
                                    titulo: 'Criterios',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                }
                            ]
                        },
                        {
                            nombre: 'Consultas y Reportes',
                            recursos: [{
                                    nombre: 'consultaPalabras',
                                    titulo: 'Palabras',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                },
                                {
                                    nombre: 'consultaRecursos',
                                    titulo: 'Recursos',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                },
                                {
                                    nombre: 'dominios',
                                    titulo: 'Dominios',
                                    esMenu: true,
                                    lectura: true,
                                    creacion: true,
                                    modificacion: true,
                                    eliminacion: true
                                }
                            ]
                        }
                    ]
                }
            };
        }

    };


    return LoginServicio;
};