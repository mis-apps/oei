<?php

namespace App\Http\Services;

use GuzzleHttp\Client;

class GuzzleHttpRequestService {

	private function getClient() {
		return new Client([
			'verify' => false,
			'base_uri' => config('app.api_endpoint')
		]);
	}

	protected function getIdAplicacion() {
		return config('app.id_aplicacion');
	}

	protected function getUsuario() {
		return session('username');
	}

	protected function get($recursoApi, $urlParams = null) {
		$recurso = $recursoApi . ($urlParams ? ('/' . $urlParams) : '');
		$response = $this->getClient()->get($recurso);
		return json_decode($response->getBody()->getContents());
	}

	protected function post($recursoApi, $bodyParams = array()) {
		$response = $this->getClient()->post($recursoApi, [
			'headers' => ['Content-Type' => 'application/json'],
			'body'    => json_encode($bodyParams)
		]);
		return json_decode($response->getBody()->getContents());
	}

	protected function put($recursoApi, $bodyParams, $urlParams = null) {
		$recurso = $recursoApi . ($urlParams ? ('/' . $urlParams) : '');
		$response = $this->getClient()->put($recurso, [
			'headers' => ['Content-Type' => 'application/json'],
			'body'    => json_encode($bodyParams)
		]);
		return json_decode($response->getBody()->getContents());
	}

}