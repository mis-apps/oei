-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-10-2018 a las 15:40:27
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `oei`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_archivo`
--

CREATE TABLE `neg_archivo` (
  `id` int(11) NOT NULL,
  `tipo_archivo` varchar(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `fecha_creacion_archivo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `size` int(11) NOT NULL,
  `filename` varchar(200) NOT NULL,
  `mime_type` varchar(500) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_archivo`
--

INSERT INTO `neg_archivo` (`id`, `tipo_archivo`, `nombre`, `descripcion`, `fecha_creacion_archivo`, `size`, `filename`, `mime_type`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'imagen', 'img hola', 'esta una descripcion de prueba ', '2018-09-05 13:18:31', 52, 'dato de prueba', 'bla bla bla', '2018-09-05 13:18:31', 'pepe', '2018-09-05 13:18:31', 'sdasdasd', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_archivo_aplicacion`
--

CREATE TABLE `neg_archivo_aplicacion` (
  `id` int(11) NOT NULL,
  `id_archivo` int(11) NOT NULL,
  `aplicacion` varchar(10) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_archivo_aplicacion`
--

INSERT INTO `neg_archivo_aplicacion` (`id`, `id_archivo`, `aplicacion`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(3, 1, 'Sistema de', '2018-09-05 15:00:42', 'Este es un usuario de prueba', '2018-09-05 15:00:42', 'pero la la la la', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_archivo_locutor`
--

CREATE TABLE `neg_archivo_locutor` (
  `id` int(11) NOT NULL,
  `id_archivo` int(11) NOT NULL,
  `id_locutor` int(11) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_archivo_locutor`
--

INSERT INTO `neg_archivo_locutor` (`id`, `id_archivo`, `id_locutor`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 1, '2018-09-05 15:27:01', 'asodnaas  isndoasnd  sndoasnd', '2018-09-05 15:27:01', 'jajaja jkakaklo', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_atributo_archivo`
--

CREATE TABLE `neg_atributo_archivo` (
  `id` int(11) NOT NULL,
  `id_archivo` int(11) NOT NULL,
  `atributo` varchar(20) DEFAULT NULL,
  `valor` varchar(200) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_atributo_archivo`
--

INSERT INTO `neg_atributo_archivo` (`id`, `id_archivo`, `atributo`, `valor`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 'atributo de prueba', 'valor de prueba', '2018-09-06 00:06:07', 'sdjspaaspdojpjpj', '2018-09-06 00:06:07', 'sdasdasdn  sdnsdoposdnsdn ojdposj  ojsdpasd', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_criterio`
--

CREATE TABLE `neg_criterio` (
  `id` int(11) NOT NULL,
  `criterio` varchar(45) DEFAULT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  `valor` varchar(45) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_criterio`
--

INSERT INTO `neg_criterio` (`id`, `criterio`, `codigo`, `valor`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, '2', 'asdsdasdasds', 'asdsad ', '2018-09-06 00:37:47', 'asdaskkn', '0000-00-00 00:00:00', 'nasdnndasl', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_dominio`
--

CREATE TABLE `neg_dominio` (
  `id` int(11) NOT NULL,
  `dominio` varchar(20) DEFAULT NULL,
  `valor` varchar(50) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='commentario prueba\n';

--
-- Volcado de datos para la tabla `neg_dominio`
--

INSERT INTO `neg_dominio` (`id`, `dominio`, `valor`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'asddasdsa', NULL, '2018-09-06 00:46:53', 'registro de prueba', '2018-09-06 00:46:53', 'asdasdas', 0),
(2, 'qeqwe', NULL, '2018-09-06 00:47:46', 'reg lasd a ', '2018-09-06 00:47:46', 'asdasd', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_frase`
--

CREATE TABLE `neg_frase` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_frase`
--

INSERT INTO `neg_frase` (`id`, `descripcion`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'asdasd', '2018-09-06 00:48:59', 'registro de prueba', '2018-09-06 00:48:59', 'dasdas kmdkld p', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_frase_archivo`
--

CREATE TABLE `neg_frase_archivo` (
  `id` int(11) NOT NULL,
  `id_archivo` int(11) NOT NULL,
  `id_frase` int(11) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='	';

--
-- Volcado de datos para la tabla `neg_frase_archivo`
--

INSERT INTO `neg_frase_archivo` (`id`, `id_archivo`, `id_frase`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', 'ad assdm lkkmssdm kkn', '2018-09-06 01:22:33', 'modificacion de prueba', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_idioma_locutor`
--

CREATE TABLE `neg_idioma_locutor` (
  `id` int(11) NOT NULL,
  `id_locutor` int(11) NOT NULL,
  `idioma` varchar(10) NOT NULL,
  `nativo` tinyint(1) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_idioma_locutor`
--

INSERT INTO `neg_idioma_locutor` (`id`, `id_locutor`, `idioma`, `nativo`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(25, 1, 'sadasd', 0, '2018-09-06 03:39:42', 'assdsadsa sdasdasvv sdasd', '2018-09-06 03:39:42', 'sadasdad', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_locutor`
--

CREATE TABLE `neg_locutor` (
  `id` int(11) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `fecha_nacimiento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `procedencia` varchar(30) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_locutor`
--

INSERT INTO `neg_locutor` (`id`, `genero`, `fecha_nacimiento`, `procedencia`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'masculino', '0000-00-00 00:00:00', 'Aymara', '2018-09-06 04:16:08', 'adasdasd', '0000-00-00 00:00:00', 'ssdasda', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_palabra`
--

CREATE TABLE `neg_palabra` (
  `id` int(11) NOT NULL,
  `idioma` varchar(10) NOT NULL,
  `palabra` varchar(20) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_palabra`
--

INSERT INTO `neg_palabra` (`id`, `idioma`, `palabra`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'sadsad', 'sadsad', '2018-09-06 05:29:06', 'asdsads', '2018-09-06 05:29:06', 'asdsa', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_palabra_archivo`
--

CREATE TABLE `neg_palabra_archivo` (
  `id` int(11) NOT NULL,
  `id_palabra` int(11) NOT NULL,
  `id_archivo` int(11) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_palabra_archivo`
--

INSERT INTO `neg_palabra_archivo` (`id`, `id_palabra`, `id_archivo`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 123, 12323, '2018-09-06 05:45:00', '', '2018-09-06 05:45:00', NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neg_relacion_archivo`
--

CREATE TABLE `neg_relacion_archivo` (
  `id` int(11) NOT NULL,
  `id_archivo_origen` int(11) NOT NULL,
  `id_archivo_relacionado` int(11) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `neg_relacion_archivo`
--

INSERT INTO `neg_relacion_archivo` (`id`, `id_archivo_origen`, `id_archivo_relacionado`, `descripcion`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 231231, 0, 'dasdasd', '2018-09-06 06:01:47', '', '2018-09-06 06:01:47', NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_aplicacion`
--

CREATE TABLE `seg_aplicacion` (
  `id` int(11) NOT NULL,
  `nombre_corto` varchar(20) NOT NULL,
  `nombre_completo` varchar(200) NOT NULL,
  `alias` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_creacion` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_aplicacion`
--

INSERT INTO `seg_aplicacion` (`id`, `nombre_corto`, `nombre_completo`, `alias`, `descripcion`, `fecha_creacion`, `usuario_creacion`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'OEI', 'NOMBRE SISTEMA', 'OEI-SISTEM', 'Sistema de Gestión de Recursos Multimedia', '2018-01-01 04:00:00', 'admin', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_modulo`
--

CREATE TABLE `seg_modulo` (
  `id` int(11) NOT NULL,
  `id_aplicacion` int(11) NOT NULL,
  `posicion` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_modulo`
--

INSERT INTO `seg_modulo` (`id`, `id_aplicacion`, `posicion`, `nombre`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 1, 'Admisnitración', '2018-01-01 04:00:00', 'admin', NULL, NULL, 1),
(2, 1, 2, 'Configuración', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:48:05', NULL, 1),
(3, 1, 3, 'Consultas y Reportes', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:48:05', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_persona`
--

CREATE TABLE `seg_persona` (
  `id` int(11) NOT NULL,
  `primer_apellido` varchar(30) NOT NULL,
  `segundo_apellido` varchar(30) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_persona`
--

INSERT INTO `seg_persona` (`id`, `primer_apellido`, `segundo_apellido`, `nombres`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 'PEREZ', 'LOPEZ', 'JUAN', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:32:02', NULL, 1),
(2, 'MENDOZA', 'SALAZAR', 'MARIO', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:32:02', NULL, 1),
(3, 'ESCOBAR', 'APAZA', 'JAIME', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:32:02', NULL, 1),
(4, 'ZENTENO', 'ARCE', 'PEDRO', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:32:02', NULL, 1),
(5, 'MORALES', 'QUISBERT', 'LUIS', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:32:02', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_recurso`
--

CREATE TABLE `seg_recurso` (
  `id` int(11) NOT NULL,
  `id_modulo` int(11) NOT NULL,
  `es_menu` tinyint(1) NOT NULL,
  `posicion` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_recurso`
--

INSERT INTO `seg_recurso` (`id`, `id_modulo`, `es_menu`, `posicion`, `nombre`, `titulo`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 1, 1, 'usuarios', 'Usuarios', '2018-01-01 04:00:00', 'admin', NULL, NULL, 1),
(2, 1, 1, 2, 'roles', 'Roles', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:59:18', NULL, 1),
(3, 1, 1, 3, 'modulos', 'Módulos', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:59:18', NULL, 1),
(4, 2, 1, 1, 'dominios', 'Dominios', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:59:18', NULL, 1),
(5, 2, 1, 2, 'criterios', 'Criterios', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:59:18', NULL, 1),
(6, 3, 1, 1, 'connsultaPalabras', 'Buscar Palabras', '2018-01-01 04:00:00', 'admin', '2018-10-22 21:59:18', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_rol`
--

CREATE TABLE `seg_rol` (
  `id` int(11) NOT NULL,
  `id_aplicacion` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(50) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_rol`
--

INSERT INTO `seg_rol` (`id`, `id_aplicacion`, `nombre`, `descripcion`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 'SUPER', 'Superusuario del Sistema', '2018-01-01 04:00:00', 'admin', '2018-10-22 22:05:38', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_rol_recurso`
--

CREATE TABLE `seg_rol_recurso` (
  `id` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_recurso` int(11) NOT NULL,
  `lectura` tinyint(1) NOT NULL,
  `creacion` tinyint(1) NOT NULL,
  `modificacion` tinyint(1) NOT NULL,
  `eliminacion` tinyint(1) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_rol_recurso`
--

INSERT INTO `seg_rol_recurso` (`id`, `id_rol`, `id_recurso`, `lectura`, `creacion`, `modificacion`, `eliminacion`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 1, 1, 1, 1, 1, '2018-01-01 04:00:00', 'admin', NULL, NULL, 1),
(2, 1, 2, 1, 1, 1, 1, '2018-01-01 04:00:00', 'admin', NULL, NULL, 1),
(3, 1, 3, 1, 1, 1, 1, '2018-01-01 04:00:00', 'admin', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario`
--

CREATE TABLE `seg_usuario` (
  `id` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(300) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `fecha_ultimo_acceso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_creacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `usuario_creacion` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT NULL,
  `usuario_modificacion` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario_rol`
--

CREATE TABLE `seg_usuario_rol` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_registro` varchar(50) NOT NULL,
  `fecha_modificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_modificacion` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seg_usuario_rol`
--

INSERT INTO `seg_usuario_rol` (`id`, `id_usuario`, `id_rol`, `fecha_inicio`, `fecha_fin`, `fecha_registro`, `usuario_registro`, `fecha_modificacion`, `usuario_modificacion`, `activo`) VALUES
(1, 1, 1, '2018-01-01 04:00:00', '2018-10-22 22:13:31', '2018-01-01 04:00:00', 'admin', '2018-10-22 22:13:31', NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `neg_archivo`
--
ALTER TABLE `neg_archivo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neg_archivo_aplicacion`
--
ALTER TABLE `neg_archivo_aplicacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_neg_archivos_aplicaciones_neg_archivos1_idx` (`id_archivo`);

--
-- Indices de la tabla `neg_archivo_locutor`
--
ALTER TABLE `neg_archivo_locutor`
  ADD PRIMARY KEY (`id`,`id_archivo`,`id_locutor`),
  ADD KEY `fk_neg_archivos_has_neg_locutores_neg_locutores1_idx` (`id_locutor`),
  ADD KEY `fk_neg_archivos_has_neg_locutores_neg_archivos1_idx` (`id_archivo`);

--
-- Indices de la tabla `neg_atributo_archivo`
--
ALTER TABLE `neg_atributo_archivo`
  ADD PRIMARY KEY (`id`,`id_archivo`),
  ADD KEY `fk_neg_atributos_archivo_neg_archivos1_idx` (`id_archivo`);

--
-- Indices de la tabla `neg_criterio`
--
ALTER TABLE `neg_criterio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neg_dominio`
--
ALTER TABLE `neg_dominio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neg_frase`
--
ALTER TABLE `neg_frase`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neg_frase_archivo`
--
ALTER TABLE `neg_frase_archivo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_neg_frases_archivos_neg_archivos1_idx` (`id_archivo`),
  ADD KEY `fk_neg_frases_archivos_neg_frases1_idx` (`id_frase`);

--
-- Indices de la tabla `neg_idioma_locutor`
--
ALTER TABLE `neg_idioma_locutor`
  ADD PRIMARY KEY (`id`,`id_locutor`),
  ADD KEY `fk_neg_idiomas_locutores_neg_locutores_idx` (`id_locutor`);

--
-- Indices de la tabla `neg_locutor`
--
ALTER TABLE `neg_locutor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neg_palabra`
--
ALTER TABLE `neg_palabra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neg_palabra_archivo`
--
ALTER TABLE `neg_palabra_archivo`
  ADD PRIMARY KEY (`id`,`id_palabra`,`id_archivo`),
  ADD KEY `fk_neg_palabras_archivos_neg_palabras1_idx` (`id_palabra`),
  ADD KEY `fk_neg_palabras_archivos_neg_archivos1_idx` (`id_archivo`);

--
-- Indices de la tabla `neg_relacion_archivo`
--
ALTER TABLE `neg_relacion_archivo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_neg_relaciones_archivos_neg_archivos1_idx` (`id_archivo_origen`),
  ADD KEY `fk_neg_relaciones_archivos_neg_archivos2_idx` (`id_archivo_relacionado`);

--
-- Indices de la tabla `seg_aplicacion`
--
ALTER TABLE `seg_aplicacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `seg_modulo`
--
ALTER TABLE `seg_modulo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_modulo_app` (`id_aplicacion`);

--
-- Indices de la tabla `seg_persona`
--
ALTER TABLE `seg_persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `seg_recurso`
--
ALTER TABLE `seg_recurso`
  ADD PRIMARY KEY (`id`,`id_modulo`),
  ADD KEY `fk_recurso_modulo` (`id_modulo`);

--
-- Indices de la tabla `seg_rol`
--
ALTER TABLE `seg_rol`
  ADD PRIMARY KEY (`id`,`id_aplicacion`),
  ADD KEY `fk_rol_app` (`id_aplicacion`);

--
-- Indices de la tabla `seg_rol_recurso`
--
ALTER TABLE `seg_rol_recurso`
  ADD PRIMARY KEY (`id`,`id_rol`,`id_recurso`),
  ADD KEY `fk_rol_rec_rol` (`id_rol`),
  ADD KEY `fk_rol_rec_rec` (`id_recurso`);

--
-- Indices de la tabla `seg_usuario`
--
ALTER TABLE `seg_usuario`
  ADD PRIMARY KEY (`id`,`id_persona`),
  ADD KEY `fk_seg_usuarios_seg_personas1_idx` (`id_persona`);

--
-- Indices de la tabla `seg_usuario_rol`
--
ALTER TABLE `seg_usuario_rol`
  ADD PRIMARY KEY (`id`,`id_usuario`,`id_rol`),
  ADD KEY `fk_usr_rol_usr` (`id_usuario`),
  ADD KEY `fk_usr_rol_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `neg_archivo`
--
ALTER TABLE `neg_archivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_archivo_aplicacion`
--
ALTER TABLE `neg_archivo_aplicacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `neg_archivo_locutor`
--
ALTER TABLE `neg_archivo_locutor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_atributo_archivo`
--
ALTER TABLE `neg_atributo_archivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_criterio`
--
ALTER TABLE `neg_criterio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_dominio`
--
ALTER TABLE `neg_dominio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `neg_frase`
--
ALTER TABLE `neg_frase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_frase_archivo`
--
ALTER TABLE `neg_frase_archivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_idioma_locutor`
--
ALTER TABLE `neg_idioma_locutor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `neg_locutor`
--
ALTER TABLE `neg_locutor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_palabra`
--
ALTER TABLE `neg_palabra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_palabra_archivo`
--
ALTER TABLE `neg_palabra_archivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `neg_relacion_archivo`
--
ALTER TABLE `neg_relacion_archivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `seg_aplicacion`
--
ALTER TABLE `seg_aplicacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `seg_modulo`
--
ALTER TABLE `seg_modulo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `seg_persona`
--
ALTER TABLE `seg_persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `seg_recurso`
--
ALTER TABLE `seg_recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `seg_rol`
--
ALTER TABLE `seg_rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `seg_rol_recurso`
--
ALTER TABLE `seg_rol_recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `seg_usuario_rol`
--
ALTER TABLE `seg_usuario_rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
