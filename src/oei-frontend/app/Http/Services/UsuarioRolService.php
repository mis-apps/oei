<?php

namespace App\Http\Services;

class UsuarioRolService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_usuario_rol');
	}

	public function rolesDeUsuario($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function guardarUsuarioRol($params) {
		if(empty($params['id'])) {
			$params['usuarioRegistro'] = $this->getUsuario();
			$resultado = $this->post($this->recursoApi(), $params);
		} else {
			$params['usuarioModificacion'] = $this->getUsuario();
			$resultado = $this->put($this->recursoApi(), $params, $params['id']);
		}
		return $resultado;
	}


}