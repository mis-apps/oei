<?php

namespace App\Http\Services;

class AplicacionService extends GuzzleHttpRequestService
{

    private function recursoApi()
    {
        return config('app.recurso_aplicacion');
    }

    public function listarAplicaciones()
    {
        return $this->get($this->recursoApi());
    }

    public function obtenerAplicacion($params)
    {
        return $this->get($this->recursoApi(), $params['id']);
    }

    public function guardarAplicacion($params)
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

    public function eliminarAplicacion($params)
    {
        $params['activo'] = false;
        $params['usuarioModificacion'] = $this->getUsuario();
        $resultado = $this->put($this->recursoApi(), $params, $params['id']);
    }

}
