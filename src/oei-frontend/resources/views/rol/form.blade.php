<div class="modal fade" id="modal-form-rol">
  <div class="modal-dialog">
    <div id='content-form-rol' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Rol</h4>
      </div>

      <form class="form-horizontal" autocomplete="off">
        <div class="modal-body">
          <div class="box-body">

            <input type="hidden" id="id" value="">

            <div class="form-group required">
              <label for="nombre" class="col-sm-4 control-label">Nombre:</label>
              <div class="col-xs-4">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre del Rol" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="descripcion" class="col-sm-4 control-label">Descripción:</label>
              <div class="col-xs-4">
                <input type="text" id="descripcion" name="descripcion" placeholder="Descrípción del Rol" class="form-control input-sm">
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn-save-rol" class="btn btn-info">Guardar</button>
          <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cancelar</button>
        </div>
      </form>


    </div>
  </div>
</div>