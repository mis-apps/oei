<?php

namespace App\Http\Services;

class RecursoService extends GuzzleHttpRequestService {

	private function recursoApi($recursoModulo = false) {
		return config($recursoModulo ? 'app.recurso_recurso_modulo' : 'app.recurso_recurso');
	}

	public function listarRecursosDeModulo($idModulo) {
		return $this->get($this->recursoApi(true), $idModulo);
	}

	public function obtenerRecurso($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function guardarRecurso($params) {
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

	public function eliminarRecurso($params) {
		$params['activo'] = false;
		$resultado = $this->put($this->recursoApi(), $params, $params['id']);
	}

}