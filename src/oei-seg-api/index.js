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
    operatorsAliases: false
});

// definición de modelos
const modelos = {};
modelos['Aplicacion'] = db.import('./modelos/aplicacion.js');
//modelos['negArchivos'] = db.import('./modelos/neg_archivos.js');

// cargado de servicios
const servicios = {};
servicios['Aplicacion'] = require('./servicios/aplicacion.servicio')(servicios, modelos, Sequelize.Op);
//servicios['negArchivos'] = require('./servicios/archivos.servicios')(servicios, modelos, Sequelize.Op);

// creación de la aplicación express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// creación del enrutador
const router = express.Router();

// cargado del controlador en el enrutador
require('./controladores/aplicacion.controlador')(router, servicios);
//require('./controladores/archivo.controlador')(router, servicios);

// cargado del enrutador en la aplicación
app.use('/api-aplicacion/v1', router);


// manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(400).json({});
});

// inicialización de la aplicación
app.listen(port, () => {
    console.log(`Servidor oei-api corriendo en http://localhost:${port}`)
});
