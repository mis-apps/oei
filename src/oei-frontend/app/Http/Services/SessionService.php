<?php

namespace App\Http\Services;

use Session;

class SessionService  {

	public static function iniciarSession($data) {
		Session::flush();
		Session::put('username', $data->username);
		Session::put('idUsuario', $data->idUsuario);
		Session::put('idPersona', $data->idPersona);
		Session::put('nombreCompleto', $data->nombreCompleto);
		// ordenamos todos los modulos y recursos a los q tiene permiso el usuario
		$modulosOrdenados = array_values(array_sort($data->modulos, function ($value) {
			return ((100 * $value->posicionModulo) + $value->posicionRecurso);
		}));
		// armamos una estructura para menus(modulos) y submenus(recursos)
		$modulos = [];
		foreach ($modulosOrdenados as $moduloItem) {
			if (!array_key_exists($moduloItem->modulo, $modulos)) {
				$modulos[$moduloItem->modulo] = [];
			}
			$recursoArray = $modulos[$moduloItem->modulo];
			if(!array_key_exists($moduloItem->recurso, $recursoArray)) {

				$recursoArray[$moduloItem->recurso] = (object) [
					'nombreRecurso' => $moduloItem->recurso,
					'titulo' => $moduloItem->titulo,
					'esMenu' => $moduloItem->esMenu,
					'puedeCrear' => $moduloItem->puedeCrear,
					'puedeModificar' => $moduloItem->puedeModificar,
					'puedeEliminar' => $moduloItem->puedeEliminar
				];
			}
			$modulos[$moduloItem->modulo] = $recursoArray;
		}
		Session::put('modulos', $modulos);
		Session::put('recursos', array_collapse(array_pluck($modulos, '*')));
	}

	public static function finalizarSession() {
		Session::flush();
	}

	public static function recursoPath($path) {
		$recurso = null;
		$nombreRecurso = substr($path, 1);
		foreach (session('recursos') as $itemRecurso) {
			if(($itemRecurso->nombreRecurso == $nombreRecurso) || (starts_with($nombreRecurso, ($itemRecurso->nombreRecurso . '/')))) {
				$recurso = $itemRecurso;
				break;
			}
		}
		return $recurso;
	}

}