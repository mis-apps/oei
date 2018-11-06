<script>

	$(function () {
		$('#tabla-permisos').DataTable({
			'paging'      : false,
			'lengthChange': false,
			'searching'   : false,
			'ordering'    : false,
			'info'        : false,
			'autoWidth'   : false
		})
	});

	$(document).on('click', '.open-form-recurso', function() {
		unloadMask('content-form-recurso');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('recurso.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#nombre').val(response.nombre);
					$('#titulo').val(response.titulo);
					$(response.esMenu ? '#esMenuSi' : '#esMenuNo').prop('checked', true);
					$('#posicion').val(response.posicion);
					$('#modal-form-recurso').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#nombre').val('');
			$('#titulo').val('');
			$('#esMenuSi').prop('checked', true);
			$('#posicion').val('');
			$('#modal-form-recurso').modal('show');
		}
	});

	$(document).on('click', '#btn-save-recurso', function() {
		loadMask('content-form-recurso');
		$.ajax({
			url: '{{ route('recurso.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				idModulo : $("#idModulo").val(),
				nombre : $("#nombre").val(),
				titulo : $("#titulo").val(),
				esMenu : $('input[name=esMenu]:checked').val(),
				posicion : $("#posicion").val()
			},
			success: function(response) {
				location.reload();
			}
		});
	});

	$(document).on('click', '.open-confirm-delete', function() {
		unloadMask('content-form-delete');
		$('#btn-delete').val($(this).val());
		$('#label-registro').html($(this).attr('name'));
		$('#modal-confirm-delete').modal('show');
	});

	$(document).on('click', '#btn-delete', function() {
		loadMask('content-form-delete');
		$.ajax({
			url: '{{ route('recurso.delete') }}',
			type: 'POST',
			data: {
				id : $(this).val(),
			},
			success: function(response) {
				location.reload();
			}
		});
	});

	// permisos
	$(document).on('click', '.open-modal-permisos', function() {
		reiniciarPermisos();
		unloadMask('content-permisos');
		const idRecurso = $(this).val();
		const titulo = $(this).attr('name');
		$("#span-recurso").html(titulo);
		$("#idRecurso").val(idRecurso);

		$.ajax({ // consulta los permisos (rol_recurso) del recurso abierto
			url: '{{ route('recurso.permisos') }}',
			type: 'POST',
			data: {id: idRecurso},
			success: function(response) {
				desplegarPermisos(response);
				$('#modal-permisos').modal('show');
			}
		});

	});

	const desplegarPermisos = function(rolRecursoList) {
		rolRecursoList.forEach(function(rolRecurso) {

			$("#L" + rolRecurso.idRol).val(rolRecurso.id);
			$("#C" + rolRecurso.idRol).val(rolRecurso.id);
			$("#M" + rolRecurso.idRol).val(rolRecurso.id);
			$("#E" + rolRecurso.idRol).val(rolRecurso.id);

			if(rolRecurso.activo && rolRecurso.lectura) {
				$("#L" + rolRecurso.idRol).removeClass('btn-danger').addClass('btn-success');
				$("#L" + rolRecurso.idRol).children(":first").removeClass('fa-times').addClass('fa-check');

				$("#C" + rolRecurso.idRol).prop('disabled', false);
				$("#M" + rolRecurso.idRol).prop('disabled', false);
				$("#E" + rolRecurso.idRol).prop('disabled', false);

				if(rolRecurso.creacion) {
					$("#C" + rolRecurso.idRol).removeClass('btn-danger').addClass('btn-success');
					$("#C" + rolRecurso.idRol).children(":first").removeClass('fa-times').addClass('fa-check');
				} else {
					$("#C" + rolRecurso.idRol).removeClass('btn-success').addClass('btn-danger');
					$("#C" + rolRecurso.idRol).children(":first").removeClass('fa-check').addClass('fa-times');
				}

				if(rolRecurso.modificacion) {
					$("#M" + rolRecurso.idRol).removeClass('btn-danger').addClass('btn-success');
					$("#M" + rolRecurso.idRol).children(":first").removeClass('fa-times').addClass('fa-check');
				} else {
					$("#M" + rolRecurso.idRol).removeClass('btn-success').addClass('btn-danger');
					$("#M" + rolRecurso.idRol).children(":first").removeClass('fa-check').addClass('fa-times');
				}

				if(rolRecurso.eliminacion) {
					$("#E" + rolRecurso.idRol).removeClass('btn-danger').addClass('btn-success');
					$("#E" + rolRecurso.idRol).children(":first").removeClass('fa-times').addClass('fa-check');
				} else {
					$("#E" + rolRecurso.idRol).removeClass('btn-success').addClass('btn-danger');
					$("#E" + rolRecurso.idRol).children(":first").removeClass('fa-check').addClass('fa-times');
				}
			}
		});
	}

	const reiniciarPermisos = function() {
		$(".btn-permiso").removeClass('btn-success').removeClass('btn-danger');
		$(".btn-permiso").val('');
		$(".btn-permiso").prop('disabled', true);
		$(".btn-acceso").prop('disabled', false);
		$(".btn-acceso").addClass('btn-danger');
		$(".icono-permiso").removeClass('fa-check').removeClass('fa-times').addClass('fa-times');
	}


	$(document).on('click', '.btn-permiso', function() {
		loadMask('content-permisos');

		let idRolRecurso = $(this).val();
		let operacionIdRol = $(this).attr('id');
		let concederPermiso = $(this).hasClass('btn-danger');
		let operacion = operacionIdRol.substring(0, 1);
		let params = {
			id: idRolRecurso,
			idRecurso: $("#idRecurso").val(),
			idRol: 	operacionIdRol.substring(1)
		};

		if(operacion == 'L') {
			params.lectura = concederPermiso;
			params.creacion = false;
			params.modificacion = false;
			params.eliminacion = false;
			params.activo = concederPermiso;
		} else if(operacion == 'C') {
			params.creacion = concederPermiso;
		} if(operacion == 'M') {
			params.modificacion = concederPermiso;
		} if(operacion == 'E') {
			params.eliminacion = concederPermiso;
		}

		$.ajax({ // actualizar
			url: '{{ route('permiso.save') }}',
			type: 'POST',
			data: params,
			beforeSend: function() {
				reiniciarPermisos();
			},
			success: function(response) {
				desplegarPermisos(response);
				unloadMask('content-permisos');
			}
		});

	});

</script>
