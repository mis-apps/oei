<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\SessionService;
use App\Http\Services\CriterioService;

class CriterioController extends Controller
{
    protected $criterioService;

    public function __construct(CriterioService $criterioService)
    {
        $this->criterioService = $criterioService;
    }

    public function index(Request $request)
    {
        $recurso = SessionService::recursoPath($request->getPathInfo());
        $criteriosList = $this->criterioService->listarCriterios();
        return view('criterio.index', [
            'criteriosList' => $criteriosList,
            'recurso' => $recurso,
        ]);
    }

    public function form(Request $request)
    {
        return response()->json($this->criterioService->obtenerCriterio($request->all()));
    }

    public function save(Request $request)
    {
        return response()->json($this->criterioService->guardarCriterio($request->all()));
    }

    public function delete(Request $request)
    {
        return response()->json($this->criterioService->eliminarCriterio($request->all()));
    }

}
