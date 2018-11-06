<?php

// ACCESO
Route::get('/', 'AccesoController@index');
Route::post('/login', 'AccesoController@login')->name('login');
Route::get('/logout', 'AccesoController@logout')->name('logout');

// MODULOS
Route::group(['middleware' => ['verifica_session', 'verifica_permiso']], function () {

	// principal
	Route::get('/principal', 'PrincipalController@index')->name('principal');

	// rol
	Route::get('/rol', 'RolController@index')->name('rol');
	Route::post('/rol/form', 'RolController@form')->name('rol.form');
	Route::post('/rol/save', 'RolController@save')->name('rol.save');
	Route::post('/rol/delete', 'RolController@delete')->name('rol.delete');

	// modulo
	Route::get('/modulo', 'ModuloController@index')->name('modulo');
	Route::post('/modulo/form', 'ModuloController@form')->name('modulo.form');
	Route::post('/modulo/save', 'ModuloController@save')->name('modulo.save');
	Route::post('/modulo/delete', 'ModuloController@delete')->name('modulo.delete');

	// recurso
	Route::get('/recurso/{idModulo}', 'RecursoController@index')->name('recurso');
	Route::post('/recurso/form', 'RecursoController@form')->name('recurso.form');
	Route::post('/recurso/save', 'RecursoController@save')->name('recurso.save');
	Route::post('/recurso/delete', 'RecursoController@delete')->name('recurso.delete');
	Route::post('recurso/permisos', 'RecursoController@recursoPermisos')->name('recurso.permisos');
	Route::post('recurso/permiso', 'RecursoController@guardarPermiso')->name('permiso.save');

	// usuario
	Route::get('/usuario', 'UsuarioController@index')->name('usuario');
	Route::post('/usuario/form', 'UsuarioController@form')->name('usuario.form');
	Route::post('/usuario/save', 'UsuarioController@save')->name('usuario.save');
	Route::post('/usuario/delete', 'UsuarioController@delete')->name('usuario.delete');
	Route::post('usuario/roles', 'UsuarioController@usuarioRoles')->name('usuario.roles');
	Route::post('usuario/rol', 'UsuarioController@guardarUsuarioRol')->name('usuario.rol');

	// dominio
	Route::get('/dominio', 'DominioController@index')->name('dominio');
	Route::post('/dominio/form', 'DominioController@form')->name('dominio.form');
	Route::post('/dominio/save', 'DominioController@save')->name('dominio.save');
	Route::post('/dominio/delete', 'DominioController@delete')->name('dominio.delete');

});



