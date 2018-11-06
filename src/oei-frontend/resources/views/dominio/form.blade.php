<div class="modal fade" id="modal-form-dominio">
  <div class="modal-dialog">
    <div id='content-form-dominio' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Dominio</h4>
      </div>

      <form class="form-horizontal" autocomplete="off">
        <div class="modal-body">
          <div class="box-body">

            <input type="hidden" id="id" value="">

            <div class="form-group required">
              <label for="dominio" class="col-sm-4 control-label">Dominio:</label>
              <div class="col-xs-4">
                <input type="text" id="dominio" name="dominio" placeholder="Nombre del Dominio" class="form-control input-sm">
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
          <button type="button" id="btn-save-dominio" class="btn btn-info">Guardar</button>
          <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cancelar</button>
        </div>
      </form>


    </div>
  </div>
</div>