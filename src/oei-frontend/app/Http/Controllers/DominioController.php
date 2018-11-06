<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\DominioService;

class DominioController extends Controller {

	protected $dominioService;

	public function __construct(DominioService $dominioService) {
		$this->dominioService = $dominioService;
	}

	public function index(Request $request) {
		$recurso = SessionService::recursoPath($request->getPathInfo());
		$dominiosList = $this->dominioService->listarDominios();
		return view('dominio.index', [
			'dominiosList' => $dominiosList,
			'recurso' => $recurso,
		]);
	}

	public function form(Request $request) {
		return response()->json($this->dominioService->obtenerDominio($request->all()));
	}

	public function save(Request $request) {
		return response()->json($this->dominioService->guardarDominio($request->all()));
	}

	public function delete(Request $request) {
		return response()->json($this->dominioService->eliminarDominio($request->all()));
	}

}
