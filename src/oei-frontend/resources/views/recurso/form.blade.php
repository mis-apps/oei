<div class="modal fade" id="modal-form-recurso">
  <div class="modal-dialog">
    <div id='content-form-recurso' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Recurso</h4>
      </div>

      <form class="form-horizontal" autocomplete="off">
        <div class="modal-body">
          <div class="box-body">

            <input type="hidden" id="id" value="">
            <input type="hidden" id="idModulo" value="{{ $modulo->id }}">

            <div class="form-group required">
              <label for="nombre" class="col-sm-4 control-label">Nombre:</label>
              <div class="col-xs-4">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre del Recurso" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="nombre" class="col-sm-4 control-label">Título:</label>
              <div class="col-xs-4">
                <input type="text" id="titulo" name="titulo" placeholder="Título del Recurso" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="nombre" class="col-sm-4 control-label">Es Menú:</label>
              <div class="col-xs-4">
                <input type="radio" id="esMenuSi" name="esMenu" value="true"> Si
                <input type="radio" id="esMenuNo" name="esMenu" value="false" class="margin-left-20"> No
              </div>
            </div>

            <div class="form-group required">
              <label for="orden" class="col-sm-4 control-label">Posición:</label>
              <div class="col-xs-4">
                <input type="number" id="posicion" min="1" max="20" maxlength="2" class="form-control input-sm">
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn-save-recurso" class="btn btn-info">Guardar</button>
          <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cancelar</button>
        </div>
      </form>


    </div>
  </div>
</div>