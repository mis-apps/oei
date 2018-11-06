<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\ModuloService;

class ModuloController extends Controller {

    protected $moduloService;

	public function __construct(ModuloService $moduloService) {
		$this->moduloService = $moduloService;
	}

	public function index(Request $request) {
		$recurso = SessionService::recursoPath($request->getPathInfo());
		$resultado = $this->moduloService->listarModulos();
		return view('modulo.index', [
			'modulosList' => $resultado,
			'recurso' => $recurso
		]);
	}

	public function form(Request $request) {
		return response()->json($this->moduloService->obtenerModulo($request->all()));
	}

	public function save(Request $request) {
		return response()->json($this->moduloService->guardarModulo($request->all()));
	}

	public function delete(Request $request) {
		return response()->json($this->moduloService->eliminarModulo($request->all()));
	}

}
