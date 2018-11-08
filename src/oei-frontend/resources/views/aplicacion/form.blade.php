<div class="modal fade" id="modal-form-dominio">
  <div class="modal-dialog">
    <div id='content-form-aplicacion' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Aplicacion</h4>
      </div>

      <form class="form-horizontal" autocomplete="off">
        <div class="modal-body">
          <div class="box-body">

            <input type="hidden" id="id" value="">

            <div class="form-group required">
              <label for="nombreCorto" class="col-sm-4 control-label">Nombre Corto:</label>
              <div class="col-xs-4">
                <input type="text" id="nombreCorto" name="nombreCorto" placeholder="Nombre del Corto" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="nombreCompleto" class="col-sm-4 control-label">Nombre Completo:</label>
              <div class="col-xs-4">
                <input type="text" id="nombreCompleto" name="nombreCompleto" placeholder="Nombre del Completo" class="form-control input-sm">
              </div>
            </div>


            <div class="form-group required">
              <label for="alias" class="col-sm-4 control-label">Alias:</label>
              <div class="col-xs-4">
                <input type="text" id="alias" name="alias" placeholder="Alias de la Aplicacion" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="descripcion" class="col-sm-4 control-label">Descripcion:</label>
              <div class="col-xs-4">
                <input type="text" id="descripcion" name="descripcion" placeholder="Descripcion de la Aplicacion" class="form-control input-sm">
              </div>
            </div>

         </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn-save-aplicacion" class="btn btn-info">Guardar</button>
          <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cancelar</button>
        </div>
      </form>


    </div>
  </div>
</div>
