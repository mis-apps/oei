'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mysqltwo = require('mysql2');
const Sequelize = require('sequelize');
const validator = require('node-input-validator');

validator.messages({
    'required': 'El campo es requerido'
});

const router = express.Router();
const app = express();


//--------------------------------------------------
// Conexión a la Base de Datos
//--------------------------------------------------
const db = new Sequelize('oei', 'root', 'zxcvbnm', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});


//--------------------------------------------------
// Definición de modelos
//--------------------------------------------------
const modelos = {};
// base
modelos['Archivo'] = db.import('./modelos/base/archivo.js');
modelos['ArchivoAplicacion'] = db.import('./modelos/base/archivoAplicacion.js');
modelos['ArchivoLocutor'] = db.import('./modelos/base/archivoLocutor.js');
modelos['AtributoArchivo'] = db.import('./modelos/base/atributoArchivo.js');
modelos['Criterio'] = db.import('./modelos/base/criterio.js');
modelos['Dominio'] = db.import('./modelos/base/dominio.js');
modelos['Frase'] = db.import('./modelos/base/frase.js');
modelos['FraseArchivo'] = db.import('./modelos/base/fraseArchivo.js');
modelos['IdiomaLocutor'] = db.import('./modelos/base/idiomaLocutor.js');
modelos['Locutor'] = db.import('./modelos/base/locutor.js');
modelos['Palabra'] = db.import('./modelos/base/palabra.js');
modelos['PalabraArchivo'] = db.import('./modelos/base/palabraArchivo.js');
modelos['RelacionArchivo'] = db.import('./modelos/base/relacionArchivo.js');
// negocio
// seguridad
modelos['Aplicacion'] = db.import('./modelos/seguridad/aplicacion.js');
modelos['Modulo'] = db.import('./modelos/seguridad/modulo.js');
modelos['Persona'] = db.import('./modelos/seguridad/persona.js');
modelos['Recurso'] = db.import('./modelos/seguridad/recurso.js');
modelos['Rol'] = db.import('./modelos/seguridad/rol.js');
modelos['RolRecurso'] = db.import('./modelos/seguridad/rolRecurso.js');
modelos['Usuario'] = db.import('./modelos/seguridad/usuario.js');
modelos['UsuarioPermiso'] = db.import('./modelos/seguridad/usuarioPermiso.js');
modelos['UsuarioRol'] = db.import('./modelos/seguridad/usuarioRol.js');
// relaciones
Object.keys(modelos).forEach((nombre) => {
    if (modelos[nombre].asociar) {
        modelos[nombre].asociar(modelos);
    }
});


//--------------------------------------------------
// Definición de modelos
//--------------------------------------------------
const servicios = {};
// base
servicios['Archivo'] = require('./servicios/base/archivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['ArchivoAplicacion'] = require('./servicios/base/archivoAplicacion.servicio')(servicios, modelos, Sequelize.Op);
servicios['ArchivoLocutor'] = require('./servicios/base/archivoLocutor.servicio')(servicios, modelos, Sequelize.Op);
servicios['AtributoArchivo'] = require('./servicios/base/atributoArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['Criterio'] = require('./servicios/base/criterio.servicio')(servicios, modelos, Sequelize.Op);
servicios['Dominio'] = require('./servicios/base/dominio.servicio')(servicios, modelos, Sequelize.Op);
servicios['Frase'] = require('./servicios/base/frase.servicio')(servicios, modelos, Sequelize.Op);
servicios['FraseArchivo'] = require('./servicios/base/fraseArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['IdiomaLocutor'] = require('./servicios/base/idiomaLocutor.servicio')(servicios, modelos, Sequelize.Op);
servicios['Locutor'] = require('./servicios/base/locutor.servicio')(servicios, modelos, Sequelize.Op);
servicios['Palabra'] = require('./servicios/base/palabra.servicio')(servicios, modelos, Sequelize.Op);
servicios['PalabraArchivo'] = require('./servicios/base/palabraArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['RelacionArchivo'] = require('./servicios/base/relacionArchivo.servicio')(servicios, modelos, Sequelize.Op);
// negocio
// seguridad
servicios['Aplicacion'] = require('./servicios/seguridad/aplicacion.servicio')(servicios, modelos, Sequelize.Op);
servicios['Modulo'] = require('./servicios/seguridad/modulo.servicio')(servicios, modelos, Sequelize.Op);
servicios['Persona'] = require('./servicios/seguridad/persona.servicio')(servicios, modelos, Sequelize.Op);
servicios['Recurso'] = require('./servicios/seguridad/recurso.servicio')(servicios, modelos, Sequelize.Op);
servicios['Rol'] = require('./servicios/seguridad/rol.servicio')(servicios, modelos, Sequelize.Op);
servicios['RolRecurso'] = require('./servicios/seguridad/rolRecurso.servicio')(servicios, modelos, Sequelize.Op);
servicios['Usuario'] = require('./servicios/seguridad/usuario.servicio')(servicios, modelos, Sequelize.Op);
servicios['UsuarioPermiso'] = require('./servicios/seguridad/usuarioPermiso.servicio')(servicios, modelos, Sequelize.Op);
servicios['UsuarioRol'] = require('./servicios/seguridad/usuarioRol.servicio')(servicios, modelos, Sequelize.Op);


//--------------------------------------------------
// Definición de Controladores
//--------------------------------------------------
// base
require('./controladores/base/archivo.controlador')(router, servicios);
require('./controladores/base/archivoAplicacion.controlador')(router, servicios);
require('./controladores/base/archivoLocutor.controlador')(router, servicios);
require('./controladores/base/atributoArchivo.controlador')(router, servicios);
require('./controladores/base/criterio.controlador')(router, servicios);
require('./controladores/base/dominio.controlador')(router, servicios);
require('./controladores/base/frase.controlador')(router, servicios);
require('./controladores/base/fraseArchivo.controlador')(router, servicios);
require('./controladores/base/idiomaLocutor.controlador')(router, servicios);
require('./controladores/base/locutor.controlador')(router, servicios);
require('./controladores/base/palabra.controlador')(router, servicios);
require('./controladores/base/palabraArchivo.controlador')(router, servicios);
require('./controladores/base/relacionArchivo.controlador')(router, servicios);
// negocio
// seguridad
require('./controladores/seguridad/aplicacion.controlador')(router, servicios);
require('./controladores/seguridad/login.controlador')(router, modelos);
require('./controladores/seguridad/modulo.controlador')(router, servicios);
require('./controladores/seguridad/persona.controlador')(router, servicios);
require('./controladores/seguridad/recurso.controlador')(router, servicios);
require('./controladores/seguridad/rol.controlador')(router, servicios);
require('./controladores/seguridad/rolRecurso.controlador')(router, servicios);
require('./controladores/seguridad/usuario.controlador')(router, servicios, modelos, validator);
require('./controladores/seguridad/usuarioRol.controlador')(router, servicios);


// Cargado del mpodulo body parses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cargado del enrutador en la aplicación
app.use('/oei-api/v1', router);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(400).json({});
});

// Inicialización de la aplicación
const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Servidor oei-api corriendo en http://localhost:${port}`)
});
