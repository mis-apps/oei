<?php

namespace App\Http\Services;

class DominioService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_dominio');
	}

	public function listarDominios() {
		return $this->get($this->recursoApi());
	}

	public function obtenerDominio($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function guardarDominio($params) {
		if(empty($params['id'])) {
			$params['usuarioRegistro'] = $this->getUsuario();
			$resultado = $this->post($this->recursoApi(), $params);
		} else {
			$params['usuarioModificacion'] = $this->getUsuario();
			$resultado = $this->put($this->recursoApi(), $params, $params['id']);
		}
		return $resultado;
	}

	public function eliminarDominio($params) {
		$params['activo'] = false;
		$params['usuarioModificacion'] = $this->getUsuario();
		$resultado = $this->put($this->recursoApi(), $params, $params['id']);
	}

}
