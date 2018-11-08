<div class="modal fade" id="modal-form-criterio">
  <div class="modal-dialog">
    <div id='content-form-criterio' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Criterio</h4>
      </div>

      <form class="form-horizontal" autocomplete="off">
        <div class="modal-body">
          <div class="box-body">

            <input type="hidden" id="id" value="">

            <div class="form-group required">
              <label for="criterio" class="col-sm-4 control-label">Criterio:</label>
              <div class="col-xs-4">
                <input type="text" id="criterio" name="criterio" placeholder="Nombre del Criterio" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="codigo" class="col-sm-4 control-label">Codigo:</label>
              <div class="col-xs-4">
                <input type="text" id="codigo" name="codigo" placeholder="Codigo" class="form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="valor" class="col-sm-4 control-label">Valor:</label>
              <div class="col-xs-4">
                <input type="text" id="valor" name="valor" placeholder="Valor" class="form-control input-sm">
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn-save-criterio" class="btn btn-info">Guardar</button>
          <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cancelar</button>
        </div>
      </form>


    </div>
  </div>
</div>
