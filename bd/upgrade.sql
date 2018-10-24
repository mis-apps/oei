--
-- NOTA: sentencias DDL y DML posterior al restore del oei.rar
--

CREATE TABLE oei.seg_persona (
    id INT NOT NULL AUTO_INCREMENT,
    primer_apellido VARCHAR(30) NOT NULL,
    segundo_apellido VARCHAR(30) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_registro VARCHAR(100) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_modificacion VARCHAR(100),
    activo TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=MyISAM;


-- datos de personas
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 'PEREZ', 'LOPEZ', 'JUAN', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:32:02', null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 'MENDOZA', 'SALAZAR', 'MARIO', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:32:02', null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 'ESCOBAR', 'APAZA', 'JAIME', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:32:02', null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (4, 'ZENTENO', 'ARCE', 'PEDRO', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:32:02', null, true);
INSERT INTO oei.seg_persona (id, primer_apellido, segundo_apellido, nombres, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (5, 'MORALES', 'QUISBERT', 'LUIS', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:32:02', null, true);


-- datos de usuarios
TRUNCATE TABLE oei.seg_usuario;
ALTER TABLE oei.seg_usuario MODIFY COLUMN password VARCHAR(300) NOT NULL;
ALTER TABLE oei.seg_usuario CHANGE user_name username VARCHAR(100) NOT NULL;
ALTER TABLE oei.seg_usuario MODIFY COLUMN fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL;
ALTER TABLE oei.seg_usuario ADD CONSTRAINT fk_usuario_persona FOREIGN KEY (id_persona) REFERENCES oei.seg_persona (id);
INSERT INTO oei.seg_usuario (id, id_persona, username, password, estado, fecha_ultimo_acceso, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 'admin', 'admin', 'VIGENTE', '2018-01-01 00:00:00', '2018-01-01 00:00:00', 'admin', null, null, true);


-- datos de aplicacion
TRUNCATE TABLE oei.seg_aplicacion;
ALTER TABLE oei.seg_aplicacion MODIFY COLUMN fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL;
INSERT INTO oei.seg_aplicacion (id, nombre_corto, nombre_completo, alias, descripcion, fecha_creacion, usuario_creacion, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 'OEI', 'NOMBRE SISTEMA', 'OEI-SISTEM', 'Sistema de Gestión de Recursos Multimedia', '2018-01-01 00:00:00', 'admin', null, null, true);


-- datos de modulos
DROP TABLE oei.seg_modulo;
CREATE TABLE oei.seg_modulo (
    id INT NOT NULL AUTO_INCREMENT,
    id_aplicacion INT NOT NULL,
    posicion INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_registro VARCHAR(100) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    usuario_modificacion VARCHAR(100),
    activo TINYINT(1) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_modulo_app FOREIGN KEY (id_aplicacion) REFERENCES oei.seg_aplicacion (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_modulo (id, id_aplicacion, posicion, nombre, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 1, 'Admisnitración', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_modulo (id, id_aplicacion, posicion, nombre, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 1, 2, 'Configuración', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:48:05', null, true);
INSERT INTO oei.seg_modulo (id, id_aplicacion, posicion, nombre, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 1, 3, 'Consultas y Reportes', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:48:05', null, true);


-- datos de recursos
DROP TABLE oei.seg_recurso;
CREATE TABLE oei.seg_recurso (
    id INT NOT NULL AUTO_INCREMENT,
    id_modulo INT NOT NULL,
    es_menu TINYINT(1) NOT NULL,
    posicion INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_registro VARCHAR(100) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    usuario_modificacion VARCHAR(100),
    activo TINYINT(1) NOT NULL,
    PRIMARY KEY (id, id_modulo),
    CONSTRAINT fk_recurso_modulo FOREIGN KEY (id_modulo) REFERENCES oei.seg_modulo (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, true, 1, 'usuarios', 'Usuarios', '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 1, true, 2, 'roles', 'Roles', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:59:18', null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 1, true, 3, 'modulos', 'Módulos', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:59:18', null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (4, 2, true, 1, 'dominios', 'Dominios', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:59:18', null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (5, 2, true, 2, 'criterios', 'Criterios', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:59:18', null, true);
INSERT INTO oei.seg_recurso (id, id_modulo, es_menu, posicion, nombre, titulo, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (6, 3, true, 1, 'connsultaPalabras', 'Buscar Palabras', '2018-01-01 00:00:00', 'admin', '2018-10-22 17:59:18', null, true);


-- datos de roles
DROP TABLE oei.seg_rol;
CREATE TABLE oei.seg_rol (
    id INT NOT NULL AUTO_INCREMENT,
    id_aplicacion INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_registro VARCHAR(50) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    usuario_modificacion VARCHAR(50),
    activo TINYINT(1) NOT NULL,
    PRIMARY KEY (id, id_aplicacion),
    CONSTRAINT fk_rol_app FOREIGN KEY (id_aplicacion) REFERENCES oei.seg_aplicacion (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_rol (id, id_aplicacion, nombre, descripcion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 'SUPER', 'Superusuario del Sistema', '2018-01-01 00:00:00', 'admin', '2018-10-22 18:05:38', null, true);


-- datos de roles_recursos
DROP TABLE oei.seg_rol_recurso;
CREATE TABLE oei.seg_rol_recurso (
    id INT NOT NULL AUTO_INCREMENT,
    id_rol INT NOT NULL,
    id_recurso INT NOT NULL,
    lectura TINYINT(1) NOT NULL,
    creacion TINYINT(1) NOT NULL,
    modificacion TINYINT(1) NOT NULL,
    eliminacion TINYINT(1) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_registro VARCHAR(100) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    usuario_modificacion VARCHAR(100),
    activo TINYINT(1) NOT NULL,
    PRIMARY KEY (id, id_rol, id_recurso),
    CONSTRAINT fk_rol_rec_rol FOREIGN KEY (id_rol) REFERENCES oei.seg_rol(id),
    CONSTRAINT fk_rol_rec_rec FOREIGN KEY (id_recurso) REFERENCES oei.seg_recurso (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 1, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (2, 1, 2, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);
INSERT INTO oei.seg_rol_recurso (id, id_rol, id_recurso, lectura, creacion, modificacion, eliminacion, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (3, 1, 3, true, true, true, true, '2018-01-01 00:00:00', 'admin', null, null, true);


-- datos de usuario_rol
DROP TABLE oei.seg_usuario_rol;
CREATE TABLE oei.seg_usuario_rol (
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_rol INT NOT NULL,
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_fin TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_registro VARCHAR(50) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    usuario_modificacion VARCHAR(50),
    activo TINYINT(1) NOT NULL,
    PRIMARY KEY (id, id_usuario, id_rol),
    CONSTRAINT fk_usr_rol_usr FOREIGN KEY (id_usuario) REFERENCES oei.seg_usuario(id),
    CONSTRAINT fk_usr_rol_rol FOREIGN KEY (id_rol) REFERENCES oei.seg_rol (id)
) ENGINE=MyISAM;
INSERT INTO oei.seg_usuario_rol (id, id_usuario, id_rol, fecha_inicio, fecha_fin, fecha_registro, usuario_registro, fecha_modificacion, usuario_modificacion, activo) VALUES (1, 1, 1, '2018-01-01 00:00:00', '2018-10-22 18:13:31', '2018-01-01 00:00:00', 'admin', '2018-10-22 18:13:31', null, true);




-- vista de permisos de usuario
CREATE OR REPLACE VIEW oei.seg_usuario_permiso AS
SELECT (100*modu.id + 10*rol.id + rec.id) id,
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
 


 


