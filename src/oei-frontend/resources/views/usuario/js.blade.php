<script>

	$(function () {
		$('#tabla-roles').DataTable({
			'paging'      : false,
			'lengthChange': false,
			'searching'   : false,
			'ordering'    : false,
			'info'        : false,
			'autoWidth'   : false
		})
	});

	$(document).on('click', '.open-form-usuario', function() {
		limpiarErrores();
		unloadMask('content-form-usuario');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('usuario.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#primerApellido').val(response.primerApellido);
					$('#segundoApellido').val(response.segundoApellido);
					$('#nombres').val(response.nombres);
					$('#username').val(response.username);
					$('#checkPassword').prop('checked', false);
					$('#divCheckPassword').show();
					$('#password').val('');
					$('#divPassword').hide();
					$('#modal-form-usuario').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#primerApellido').val('');
			$('#segundoApellido').val('');
			$('#nombres').val('');
			$('#username').val('');
			$('#checkPassword').prop('checked', false);
			$('#divCheckPassword').hide();
			$('#password').val('');
			$('#divPassword').show();
			$('#modal-form-usuario').modal('show');
		}
	});

	$(document).on('click', '#checkPassword', function() {
		$('#password').val('');
		if($(this).prop('checked')) {
			$('#divPassword').show();
		} else {
			$('#divPassword').hide();
		}
		$('#password').focus();
	});

	$(document).on('click', '#btn-save-usuario', function() {
		loadMask('content-form-usuario');
		$.ajax({
			url: '{{ route('usuario.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				primerApellido : $("#primerApellido").val().toUpperCase(),
				segundoApellido : $("#segundoApellido").val().toUpperCase(),
				nombres : $("#nombres").val().toUpperCase(),
				username : $("#username").val(),
				password : $("#password").val(),
				checkPassword: ($("#id").val() == '') ? false : $("#checkPassword").prop('checked')
			},
			success: function(response) {
				if(response.success) {
					location.reload();
				} else {
					limpiarErrores();
					mostrarErrores(response.message);
					unloadMask('content-form-usuario');
				}

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
			url: '{{ route('usuario.delete') }}',
			type: 'POST',
			data: {
				id : $(this).val(),
			},
			success: function(response) {
				location.reload();
			}
		});
	});

	// roles
	$(document).on('click', '.open-modal-roles', function() {
		reiniciarRoles();
		unloadMask('content-roles');
		const idUsuario = $(this).val();
		const titulo = $(this).attr('name');
		$("#span-usuario").html(titulo);
		$("#idUsuario").val(idUsuario);

		$.ajax({ // consulta los roles (usurio_rol) del usuario abierto
			url: '{{ route('usuario.roles') }}',
			type: 'POST',
			data: {id: idUsuario},
			success: function(response) {
				desplegarRoles(response);
				$('#modal-roles').modal('show');
			}
		});

	});

	const desplegarRoles = function(usuarioRolList) {
		usuarioRolList.forEach(function(usuarioRol) {
			$("#" + usuarioRol.idRol).val(usuarioRol.id);
			if(usuarioRol.activo) {
				$("#" + usuarioRol.idRol).removeClass('btn-danger').addClass('btn-success');
				$("#" + usuarioRol.idRol).children(":first").removeClass('fa-times').addClass('fa-check');
			}
		});
	}

	const reiniciarRoles = function() {
		$(".btn-rol").removeClass('btn-success').removeClass('btn-danger').addClass('btn-danger');
		$(".icono-rol").removeClass('fa-check').removeClass('fa-times').addClass('fa-times');
	}


	$(document).on('click', '.btn-rol', function() {
		loadMask('content-roles');

		let idUsuarioRol = $(this).val();
		let idRol = $(this).attr('id');
		let concederRol = $(this).hasClass('btn-danger');

		let params = {
			id: idUsuarioRol,
			idUsuario: $("#idUsuario").val(),
			idRol: 	idRol,
			activo: concederRol
		};

		$.ajax({ // actualizar
			url: '{{ route('usuario.rol') }}',
			type: 'POST',
			data: params,
			beforeSend: function() {
				reiniciarRoles();
			},
			success: function(response) {
				desplegarRoles(response);
				unloadMask('content-roles');
			}
		});

	});

</script>

