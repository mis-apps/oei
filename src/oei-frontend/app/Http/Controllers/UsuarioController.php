<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\UsuarioService;
use App\Http\Services\UsuarioRolService;
use App\Http\Services\RolService;

class UsuarioController extends Controller {

	protected $usuarioService;
	protected $usuarioRolService;
	protected $rolService;

	public function __construct(UsuarioService $usuarioService, UsuarioRolService $usuarioRolService, RolService $rolService) {
		$this->usuarioService = $usuarioService;
		$this->usuarioRolService = $usuarioRolService;
		$this->rolService = $rolService;
	}

	public function index(Request $request) {
		$recurso = SessionService::recursoPath($request->getPathInfo());
		$usuariosList = $this->usuarioService->listarUsuarios();
		$rolesList = $this->rolService->listarRoles();
		return view('usuario.index', [
			'usuariosList' => $usuariosList,
			'rolesList' => $rolesList,
			'recurso' => $recurso
		]);
	}

	public function form(Request $request) {
		return response()->json($this->usuarioService->obtenerUsuario($request->all()));
	}

	public function save(Request $request) {
		return response()->json($this->usuarioService->guardarUsuario($request->all()));
	}

	public function delete(Request $request) {
		return response()->json($this->usuarioService->eliminarUsuario($request->all()));
	}

	public function usuarioRoles(Request $request) {
		return response()->json($this->usuarioRolService->rolesDeUsuario($request->all()));
	}

	public function guardarUsuarioRol(Request $request) {
		$this->usuarioRolService->guardarUsuarioRol($request->all());
		return response()->json($this->usuarioRolService->rolesDeUsuario(['id' => $request->input('idUsuario')]));
	}

}
