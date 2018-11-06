<?php

namespace App\Http\Services;

class RolRecursoService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_rol_recurso');
	}

	public function permisosDeRecurso($params) {
		return $this->get($this->recursoApi(), $params['id']);
	}

	public function guardarRolRecurso($params) {
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