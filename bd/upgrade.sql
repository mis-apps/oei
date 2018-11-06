--
-- NOTA: sentencias DDL y DML posterior al restore del oei.rar
--

DROP VIEW oei.seg_usuario_permiso;
DROP TABLE oei.seg_aplicacion;
DROP TABLE oei.seg_modulo;
DROP TABLE oei.seg_persona;
DROP TABLE oei.seg_recurso;
DROP TABLE oei.seg_rol;
DROP TABLE oei.seg_rol_recurso;
DROP TABLE oei.seg_usuario;
DROP TABLE oei.seg_usuario_rol;


-- datos de aplicacion
CREATE TABLE oei.seg_aplicacion (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_corto VARCHAR(30) NOT NULL,
  nombre_completo VARCHAR(200) NOT NULL,
  alias VARCHAR(30) NOT NULL,
  descripcion VARCHAR(300) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_aplicacion (id, nombre_corto, nombre_completo, alias, descripcion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 'OEI', 'NOMBRE SISTEMA', 'OEI-SISTEM', 'Sistema de Gestión de Recursos Multimedia', '2018-01-01 00:00:00', 'admin', null, null, true);


-- Módulos
CREATE TABLE oei.seg_modulo (
  id INT NOT NULL AUTO_INCREMENT,
  id_aplicacion INT NOT NULL,
  posicion INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_modulo_app FOREIGN KEY (id_aplicacion) REFERENCES oei.seg_aplicacion (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_modulo (id, id_aplicacion, posicion, nombre, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 1, 'Administración', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_modulo (id, id_aplicacion, posicion, nombre, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 1, 2, 'Configuración', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_modulo (id, id_aplicacion, posicion, nombre, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 1, 3, 'Consultas y Reportes', '2018-01-01 00:00:00', 'admin', null, null, true);


-- Personas
CREATE TABLE oei.seg_persona (
  id INT NOT NULL AUTO_INCREMENT,
  primer_apellido VARCHAR(30) NOT NULL,
  segundo_apellido VARCHAR(30),
  nombres VARCHAR(50) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 'PEREZ', 'LOPEZ', 'JUAN', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 'MENDOZA', 'SALAZAR', 'MARIO', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 'ESCOBAR', 'APAZA', 'JAIME', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (4, 'ZENTENO', 'ARCE', 'PEDRO', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (5, 'MORALES', 'QUISBERT', 'LUIS', '2018-01-01 00:00:00', 'admin', null, null, true);


-- Recursos
CREATE TABLE oei.seg_recurso (
  id INT NOT NULL AUTO_INCREMENT,
  id_modulo INT NOT NULL,  
  nombre VARCHAR(100) NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  es_menu TINYINT(1) NOT NULL,
  posicion INT NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id, id_modulo),
  CONSTRAINT fk_recurso_modulo FOREIGN KEY (id_modulo) REFERENCES oei.seg_modulo (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, true, 1, 'usuario', 'Usuarios', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 1, true, 2, 'rol', 'Roles', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 1, true, 3, 'modulo', 'Módulos', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (4, 2, true, 1, 'dominio', 'Dominios', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (5, 2, true, 2, 'criterio', 'Criterios', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (6, 3, true, 1, 'connsultaPalabras', 'Buscar Palabras', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (7, 1, false, 0, 'recurso', 'Recursos', '2018-01-01 00:00:00', 'admin', null, null, true);


-- Roles
CREATE TABLE oei.seg_rol (
  id INT NOT NULL AUTO_INCREMENT,
  id_aplicacion INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(200),
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id, id_aplicacion),
  CONSTRAINT fk_rol_app FOREIGN KEY (id_aplicacion) REFERENCES oei.seg_aplicacion (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_rol (id, id_aplicacion, nombre, descripcion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 'SUPER', 'Superusuario del Sistema', '2018-01-01 00:00:00', 'admin', null, null, true);


-- Roles Recursos
CREATE TABLE oei.seg_rol_recurso (
  id INT NOT NULL AUTO_INCREMENT,
  id_rol INT NOT NULL,
  id_recurso INT NOT NULL,
  lectura TINYINT(1) NOT NULL,
  creacion TINYINT(1) NOT NULL,
  modificacion TINYINT(1) NOT NULL,
  eliminacion TINYINT(1) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_rol_rec_rol FOREIGN KEY (id_rol) REFERENCES oei.seg_rol(id),
  CONSTRAINT fk_rol_rec_rec FOREIGN KEY (id_recurso) REFERENCES oei.seg_recurso (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 1, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 1, 2, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 1, 3, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (4, 1, 4, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (5, 1, 7, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);


-- Usuarios

-- Usuarios
CREATE TABLE oei.seg_usuario (
  id INT NOT NULL AUTO_INCREMENT,
  id_persona INT NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  estado VARCHAR(20) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_usr_persona FOREIGN KEY (id_persona) REFERENCES oei.persona(id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_usuario (id, id_persona, username, password, estado, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'VIGENTE', '2018-01-01 00:00:00', 'admin', null, null, true);



-- Usuarios Roles
CREATE TABLE oei.seg_usuario_rol (
  id INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  id_rol INT NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_registro VARCHAR(50) NOT NULL,
  fecha_modificacion TIMESTAMP NULL DEFAULT NULL,
  usuario_modificacion VARCHAR(50),
  activo TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_usr_rol_usr FOREIGN KEY (id_usuario) REFERENCES oei.seg_usuario(id),
  CONSTRAINT fk_usr_rol_rol FOREIGN KEY (id_rol) REFERENCES oei.seg_rol (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_usuario_rol (id, id_usuario, id_rol, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 1, '2018-01-01 00:00:00', 'admin', null, null, true);


-- vista de permisos de usuario
CREATE OR REPLACE VIEW oei.seg_usuario_permiso AS
SELECT (1000 * modu.id + 100 * rol.id + rec.id) id,
      u.id id_usuario,
      modu.nombre modulo,
      modu.posicion posicion_modulo,
      rec.nombre recurso,
      rec.posicion posicion_recurso,
      rec.titulo,
      rec.es_menu,
      rolrec.lectura,
      rolrec.creacion,
      rolrec.modificacion,
      rolrec.eliminacion
FROM seg_usuario u,
      seg_usuario_rol urol,
      seg_rol rol,
      seg_rol_recurso rolrec,
      seg_recurso rec,
      seg_modulo modu
WHERE u.id = urol.id_usuario
  AND u.activo
  AND urol.activo
  AND urol.id_rol = rol.id
  AND rol.activo
  AND rol.id= rolrec.id_rol
  AND rolrec.activo
  AND rolrec.lectura
  AND rec.id = rolrec.id_recurso
  AND rec.activo
  AND rec.id_modulo = modu.id
  AND modu.activo;






