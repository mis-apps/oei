<div class="modal fade" id="modal-permisos">
  <div class="modal-dialog">
    <div id='content-permisos' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Permisos para el recurso "<span id="span-recurso"></span>"</h4>
      </div>
      <input type="hidden" id="idRecurso" value="">


      <div class="modal-body">
        <div class="box-body">

          <table id="tabla-permisos" class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Rol</th>
                <th class="text-center">Lectura</th>
                <th class="text-center">Escritura</th>
                <th class="text-center">Modificación</th>
                <th class="text-center">Eliminación</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($rolesList as $idx=>$rol)
              <tr>
                <td>{{ $rol->descripcion }}</td>
                <td class="text-center">
                  <button id="L{{ $rol->id }}" class="btn-acceso btn-permiso btn btn-xs">
                    <i class="icono-permiso fa"></i>
                  </button>
                </td>
                <td class="text-center">
                  <button id="C{{ $rol->id }}" class="btn-permiso btn btn-xs">
                    <i class="icono-permiso fa"></i>
                  </button>
                </td>
                <td class="text-center">
                  <button id="M{{ $rol->id }}" class="btn-permiso btn btn-xs">
                    <i class="icono-permiso fa"></i>
                  </button>
                </td>
                <td class="text-center">
                  <button id="E{{ $rol->id }}" class="btn-permiso btn btn-xs">
                    <i class="icono-permiso fa"></i>
                  </button>
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>

        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cerrar</button>
      </div>

    </div>
  </div>
</div>