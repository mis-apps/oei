<?php

namespace App\Http\Services;

class ModuloService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_modulo');
	}

	public function listarModulos() {
		return $this->get($this->recursoApi());
	}

	public function obtenerModulo($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function guardarModulo($params) {
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

	public function eliminarModulo($params) {
		$params['activo'] = false;
		$resultado = $this->put($this->recursoApi(), $params, $params['id']);
	}

}