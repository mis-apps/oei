<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\RecursoService;
use App\Http\Services\ModuloService;
use App\Http\Services\RolService;
use App\Http\Services\RolRecursoService;

class RecursoController extends Controller {

    protected $recursoService;
    protected $moduloService;
    protected $rolService;
    protected $rolRecursoService;

	public function __construct(RecursoService $recursoService, ModuloService $moduloService,
		RolService $rolService, RolRecursoService $rolRecursoService) {
		$this->recursoService = $recursoService;
		$this->moduloService = $moduloService;
		$this->rolService = $rolService;
		$this->rolRecursoService = $rolRecursoService;
	}

	public function index(Request $request, $idModulo) {
		$recurso = SessionService::recursoPath($request->getPathInfo());
		$recursosList = $this->recursoService->listarRecursosDeModulo($idModulo);
		$modulo = $this->moduloService->obtenerModulo(['id' => $idModulo]);
		$rolesList = $this->rolService->listarRoles();
		return view('recurso.index', [
			'recursosList' => $recursosList,
			'modulo' => $modulo,
			'recurso' => $recurso,
			'rolesList' => $rolesList
		]);
	}

	public function form(Request $request) {
		return response()->json($this->recursoService->obtenerRecurso($request->all()));
	}

	public function save(Request $request) {
		return response()->json($this->recursoService->guardarRecurso($request->all()));
	}

	public function delete(Request $request) {
		return response()->json($this->recursoService->eliminarRecurso($request->all()));
	}

	public function recursoPermisos(Request $request) {
		return response()->json($this->rolRecursoService->permisosDeRecurso($request->all()));
	}

	public function guardarPermiso(Request $request) {
		$this->rolRecursoService->guardarRolRecurso($request->all());
		return response()->json($this->rolRecursoService->permisosDeRecurso(['id' => $request->input('idRecurso')]));
	}

}
