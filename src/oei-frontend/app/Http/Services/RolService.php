<?php

namespace App\Http\Services;

class RolService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_rol');
	}

	public function listarRoles() {
		return $this->get($this->recursoApi());
	}

	public function obtenerRol($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function guardarRol($params) {
		if(empty($params['id'])) {
			$params['idAplicacion'] = $this->getIdAplicacion();
			$params['usuarioRegistro'] = $this->getUsuario();
			$resultado = $this->post($this->recursoApi(), $params);
		} else {
			$params['usuarioModificacion'] = $this->getUsuario();
			$resultado = $this->put($this->recursoApi(), $params, $params['id']);
		}
		return $resultado;
	}

	public function eliminarRol($params) {
		$params['activo'] = false;
		$params['usuarioModificacion'] = $this->getUsuario();
		$resultado = $this->put($this->recursoApi(), $params, $params['id']);
	}

}