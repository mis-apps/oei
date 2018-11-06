<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\RolService;

class RolController extends Controller {

	protected $rolService;

	public function __construct(RolService $rolService) {
		$this->rolService = $rolService;
	}

	public function index(Request $request) {
		$recurso = SessionService::recursoPath($request->getPathInfo());
		$resultado = $this->rolService->listarRoles();
		return view('rol.index', [
			'rolesList' => $resultado,
			'recurso' => $recurso
		]);
	}

	public function form(Request $request) {
		return response()->json($this->rolService->obtenerRol($request->all()));
	}

	public function save(Request $request) {
		return response()->json($this->rolService->guardarRol($request->all()));
	}

	public function delete(Request $request) {
		return response()->json($this->rolService->eliminarRol($request->all()));
	}

}
