<?php

namespace App\Http\Middleware;

use Closure;
use Session;

class verificaPermisoMiddleware {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $recurso = substr($request->getPathInfo(), 1);
        $tienePermiso = ($recurso == 'principal');
        if(!$tienePermiso) {
            foreach (session('recursos') as $objetoRecurso) {
                if(starts_with($recurso, $objetoRecurso->nombreRecurso)) {
                    if($objetoRecurso->esMenu) {
                        Session::put('menu-item', ('menu-item-' . $objetoRecurso->nombreRecurso));
                    }
                    $tienePermiso = true;
                    break;
                }
            }
        }
        if($tienePermiso) {
            return $next($request);
        } else {
            abort(403);
        }
    }
}