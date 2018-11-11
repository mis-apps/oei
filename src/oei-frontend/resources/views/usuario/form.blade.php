<div class="modal fade" id="modal-form-usuario">
  <div class="modal-dialog">
    <div id='content-form-usuario' class="box modal-content">


      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Módulo</h4>
      </div>

      <form class="form-horizontal" autocomplete="off">
        <div class="modal-body">
          <div class="box-body">

            <input type="hidden" id="id" value="">

            <div class="form-group required">
              <label for="primerApellido" class="col-sm-4 control-label">Primer Apellido:</label>
              <div class="col-xs-4">
                <input type="text" id="primerApellido" name="primerApellido" placeholder="Primer Apellido" class="uppercase form-control input-sm">
              </div>
            </div>

            <div class="form-group">
              <label for="segundoApellido" class="col-sm-4 control-label">Segundo Apellido:</label>
              <div class="col-xs-4">
                <input type="text" id="segundoApellido" name="segundoApellido" placeholder="Segundo Apellido" class="uppercase form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="nombres" class="col-sm-4 control-label">Nombres:</label>
              <div class="col-xs-4">
                <input type="text" id="nombres" name="nombres" placeholder="Nombres" class="uppercase form-control input-sm">
              </div>
            </div>

            <div class="form-group required">
              <label for="username" class="col-sm-4 control-label">Username:</label>
              <div class="col-xs-4">
                <input type="text" id="username" name="username" placeholder="Username" class="form-control input-sm">
              </div>
            </div>

            <div id="divCheckPassword" class="form-group">
              <label for="checkPassword" class="col-sm-4 control-label"></label>
              <div class="col-xs-4">
                <input type="checkbox" id="checkPassword" name="checkPassword" class="minimal"> Restablecer Password
              </div>
            </div>

            <div id="divPassword" class="form-group required">
              <label for="password" class="col-sm-4 control-label">Password:</label>
              <div class="col-xs-4">
                <input type="text" id="password" name="password" placeholder="Password" class="form-control input-sm">
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="btn-save-usuario" class="btn btn-info">Guardar</button>
          <button type="button" class="btn btn-default margin-left-20" data-dismiss="modal">Cancelar</button>
        </div>
      </form>


    </div>
  </div>
</div>
