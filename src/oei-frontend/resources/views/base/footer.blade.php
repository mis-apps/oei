<footer class="main-footer">
	<h6>
		<div class="pull-right hidden-xs">
			La Paz - Bolivia
		</div>
		<strong>Copyright &copy; 2018 <a href="#">{{ config('app.name') }}</a>.</strong> <span class="hidden-xs">Todos los derechos reservados.</span>
	</h6>
</footer>

<div class="control-sidebar-bg"></div>

<!-- Modal de confirmación para Eliminaciones -->
<div class="modal modal-danger fade" id="modal-confirm-delete">
  <div class="modal-dialog">
    <div id="content-form-delete" class="box modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h5 class="modal-title">¿Está seguro de eliminar el registro <b>"<span id="label-registro"></span>"</b> ?</h5>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-outline" id="btn-delete" value="">Eliminar</button>
        <button type="button" class="btn btn-danger margin-left-20" data-dismiss="modal">Cancelar</button>
      </div>

    </div>
  </div>
</div>