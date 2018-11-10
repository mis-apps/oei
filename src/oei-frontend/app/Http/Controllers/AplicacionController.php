<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\AplicacionService;

class AplicacionController extends Controller
{
    protected $aplicacionService;

    public function __construct(AplicacionService $aplicacionService)
    {
        $this->aplicacionService = $aplicacionService;
    }

    public function index(Request $request)
    {
        $recurso = SessionService::recursoPath($request->getPathInfo());
        $resultado = $this->aplicacionService->listarAplicaciones();
        return view('aplicacion.index', [
            'aplicacionesList' => $resultado,
            'recurso' => $recurso
        ]);
    }

    public function form(Request $request)
    {
        return response()->json($this->aplicacionService->obtenerAplicacion($request->all()));
    }

    public function save(Request $request)
    {
        return response()->json($this->aplicacionService->guardarAplicacion($request->all()));
    }

    public function delete(Request $request)
    {
        return response()->json($this->aplicacionService->eliminarAplicacion($request->all()));
    }

}
