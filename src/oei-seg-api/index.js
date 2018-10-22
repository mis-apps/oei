'use strict'

const express = require('express');
const bodyParser =require('body-parser');
const mysqltwo =require('mysql2');
const Sequelize = require('sequelize');

const port=process.env.PORT||3333

// parametros: base de datos, usuario, contraseña
const db = new Sequelize('oei', 'usroei', '123456', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});

// definición de modelos
const modelos = {};
modelos['Aplicacion'] = db.import('./modelos/aplicacion.js');
modelos['Archivo'] = db.import('./modelos/archivo.js');
modelos['ArchivoAplicacion'] = db.import('./modelos/archivoAplicacion.js');
modelos['ArchivoLocutor']=db.import('./modelos/archivoLocutor.js');
modelos['AtributoArchivo']=db.import('./modelos/atributoArchivo.js');
modelos['Criterio']=db.import('./modelos/criterio.js');
modelos['Dominio']=db.import('./modelos/dominio.js');
modelos['Frase']=db.import('./modelos/frase.js');
modelos['FraseArchivo']=db.import('./modelos/fraseArchivo.js');
modelos['IdiomaLocutor']=db.import('./modelos/idiomaLocutor.js');
modelos['Locutor']=db.import('./modelos/locutor.js');
modelos['Modulo']=db.import('./modelos/modulo.js');
modelos['Palabra']=db.import('./modelos/palabra.js');
modelos['PalabraArchivo']=db.import('./modelos/palabraArchivo.js');
modelos['Recurso']=db.import('./modelos/recurso.js');
modelos['RelacionArchivo']=db.import('./modelos/relacionArchivo.js');
modelos['Rol']=db.import('./modelos/rol.js');
modelos['RolRecurso']=db.import('./modelos/rolRecurso.js');
modelos['Usuario']=db.import('./modelos/usuario.js');
modelos['UsuarioRol']=db.import('./modelos/usuarioRol.js');
modelos['Persona'] = db.import('./modelos/persona.js');

// cargado de servicios
const servicios = {};
servicios['Aplicacion'] = require('./servicios/aplicacion.servicio')(servicios, modelos, Sequelize.Op);
servicios['Archivo'] = require('./servicios/archivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['ArchivoAplicacion'] = require('./servicios/archivoAplicacion.servicio')(servicios, modelos, Sequelize.Op);
servicios['ArchivoLocutor'] = require('./servicios/archivoLocutor.servicio')(servicios, modelos, Sequelize.Op);
servicios['AtributoArchivo'] = require('./servicios/atributoArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['Criterio'] = require('./servicios/criterio.servicio')(servicios, modelos, Sequelize.Op);
servicios['Dominio'] = require('./servicios/dominio.servicio')(servicios, modelos, Sequelize.Op);
servicios['Frase'] = require('./servicios/frase.servicio')(servicios, modelos, Sequelize.Op);
servicios['FraseArchivo'] = require('./servicios/fraseArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['IdiomaLocutor'] = require('./servicios/idiomaLocutor.servicio')(servicios, modelos, Sequelize.Op);
servicios['Locutor'] = require('./servicios/Locutor.servicio')(servicios, modelos, Sequelize.Op);
servicios['Modulo'] = require('./servicios/modulo.servicio')(servicios, modelos, Sequelize.Op);
servicios['Palabra'] = require('./servicios/palabra.servicio')(servicios, modelos, Sequelize.Op);
servicios['PalabraArchivo'] = require('./servicios/palabraArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['Recurso'] = require('./servicios/recurso.servicio')(servicios, modelos, Sequelize.Op);
servicios['RelacionArchivo'] = require('./servicios/relacionArchivo.servicio')(servicios, modelos, Sequelize.Op);
servicios['Rol'] = require('./servicios/rol.servicio')(servicios, modelos, Sequelize.Op);
servicios['RolRecurso'] = require('./servicios/rolRecurso.servicio')(servicios, modelos, Sequelize.Op);
servicios['Usuario'] = require('./servicios/usuario.servicio')(servicios, modelos, Sequelize.Op);
servicios['UsuarioRol'] = require('./servicios/usuarioRol.servicio')(servicios, modelos, Sequelize.Op);
servicios['Persona'] = require('./servicios/persona.servicio')(servicios, modelos, Sequelize.Op);
servicios['Login'] = require('./servicios/seguridad/login.servicio')(servicios, modelos, Sequelize.Op);

// creación de la aplicación express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// creación del enrutador
const router = express.Router();

// cargado del controlador en el enrutador
require('./controladores/aplicacion.controlador')(router, servicios);
require('./controladores/archivo.controlador')(router, servicios);
require('./controladores/archivoAplicacion.controlador')(router, servicios);
require('./controladores/archivoLocutor.controlador')(router, servicios);
require('./controladores/atributoArchivo.controlador')(router, servicios);
require('./controladores/criterio.controlador')(router, servicios);
require('./controladores/dominio.controlador')(router, servicios);
require('./controladores/frase.controlador')(router, servicios);
require('./controladores/fraseArchivo.controlador')(router, servicios);
require('./controladores/idiomaLocutor.controlador')(router, servicios);
require('./controladores/locutor.controlador')(router, servicios);
require('./controladores/modulo.controlador')(router, servicios);
require('./controladores/palabra.controlador')(router, servicios);
require('./controladores/palabraArchivo.controlador')(router, servicios);
require('./controladores/recurso.controlador')(router, servicios);
require('./controladores/relacionArchivo.controlador')(router, servicios);
require('./controladores/rol.controlador')(router, servicios);
require('./controladores/rolRecurso.controlador')(router, servicios);
require('./controladores/usuario.controlador')(router, servicios);
require('./controladores/usuarioRol.controlador')(router, servicios);
require('./controladores/persona.controlador')(router, servicios);
require('./controladores/seguridad/login.controlador')(router, servicios);

//app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');
// cargado del enrutador en la aplicación
app.use('/api-oei/v1', router);


// manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(400).json({}); 
});

// inicialización de la aplicación
app.listen(port, () => {
    console.log(`Servidor oei-api corriendo en http://localhost:${port}`)
});
