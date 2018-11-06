<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\AccesoService;
use App\Http\Services\SessionService;
use Session;

class AccesoController extends Controller {

	protected $accesoService;

	public function __construct(AccesoService $accesoService) {
		$this->accesoService = $accesoService;
	}

	public function index() {
		if(session('username')) {
			return redirect()->action('PrincipalController@index');
		} else {
			return view('acceso.index');
		}
	}

	public function login(Request $request) {
		$username = $request->input('username');
		$password = $request->input('password');
		$resultadoLogin = $this->accesoService->verificarLogin($username, $password);
		if($resultadoLogin->success) {
			$consultaPermisosUsuario = $this->accesoService->obtenerPermisosUsuario($resultadoLogin->data->idUsuario);
			if($consultaPermisosUsuario->success) {
				SessionService::iniciarSession($consultaPermisosUsuario->data);
				return redirect()->action('PrincipalController@index');
			} else {
				Session::flash('message',  $consultaPermisosUsuario->message);
				return redirect('/');
			}
		} else {
			Session::flash('message',  $resultadoLogin->message);
			return redirect('/');
		}
	}

	public function logout(Request $request) {
		SessionService::finalizarSession();
		return redirect('/');
	}

}
