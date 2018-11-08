<?php

namespace App\Http\Services;

class CriterioService extends GuzzleHttpRequestService
{

    private function recursoApi()
    {
        return config('app.recurso_criterio');
    }

    public function listarCriterios()
    {
        return $this->get($this->recursoApi());
    }

    public function obtenerCriterio($params)
    {
        return $this->get($this->recursoApi(), $params['id']);
    }

    public function guardarCriterio($params)
    {
        if (empty($params['id'])) {
            $params['usuarioRegistro'] = $this->getUsuario();
            $resultado = $this->post($this->recursoApi(), $params);
        } else {
            $params['usuarioModificacion'] = $this->getUsuario();
            $resultado = $this->put($this->recursoApi(), $params, $params['id']);
        }
        return $resultado;
    }

    public function eliminarCriterio($params)
    {
        $params['activo'] = false;
        $params['usuarioModificacion'] = $this->getUsuario();
        $resultado = $this->put($this->recursoApi(), $params, $params['id']);
    }

}
