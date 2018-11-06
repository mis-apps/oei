<?php

namespace App\Http\Services;

class UsuarioService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_usuario');
	}

	public function listarUsuarios() {
		return $this->get($this->recursoApi());
	}

	public function obtenerUsuario($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function eliminarUsuario($params) {
		$params['activo'] = false;
		$params['usuarioModificacion'] = $this->getUsuario();
		$resultado = $this->put($this->recursoApi(), $params, $params['id']);
	}

	public function guardarUsuario($params) {
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