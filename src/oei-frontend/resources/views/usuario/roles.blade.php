<div class="modal fade" id="modal-roles">
  <div class="modal-dialog">
    <div id='content-roles' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Roles Asignados pare el usuario "<span id="span-usuario"></span>"</h4>
      </div>
      <input type="hidden" id="idUsuario" value="">


      <div class="modal-body">
        <div class="box-body">

          <table id="tabla-roles" class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Rol</th>
                <th>Asignado</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($rolesList as $idx=>$rol)
              <tr>
                <td>{{ $rol->descripcion }}</td>
                <td class="text-center">
                  <button id="{{ $rol->id }}" class="btn-rol btn btn-xs btn-danger">
                    <i class="icono-rol fa fa-times"></i>
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