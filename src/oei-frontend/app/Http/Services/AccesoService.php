<?php

namespace App\Http\Services;

class AccesoService extends GuzzleHttpRequestService {

	private function recursoApi() {
		return config('app.recurso_login');
	}

	public function verificarLogin ($username, $password) {
		$bodyParams = array (
			'username' => $username,
			'password' => $password
		);
		return $this->post($this->recursoApi(), $bodyParams);
	}

	public function obtenerPermisosUsuario ($idUsuario) {
		$bodyParams = array (
			'idUsuario' => $idUsuario
		);
		return $this->put($this->recursoApi(), $bodyParams);
	}

}