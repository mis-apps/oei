<script>

	// evento click en los elementos con la clase 'open-form-aplicacion'
	$(document).on('click', '.open-form-aplicacion', function() {
		unloadMask('content-form-aplicacion');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('aplicacion.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#nombreCorto').val(response.nombreCorto);
                    $('#nombreCompleto').val(response.nombreCompleto);
                    $('#alias').val(response.alias);
                    $('#descripcion').val(response.descripcion);
					$('#modal-form-aplicacion').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#nombreCorto').val('');
            $('#nombreCompleto').val('');
            $('#alias').val('');
            $('#descripcion').val('');
			$('#modal-form-aplicacion').modal('show');
		}
	});

	// evento click en el elemento con id 'btn-save-aplicacion'
	$(document).on('click', '#btn-save-aplicacion', function() {
		loadMask('content-form-aplicacion');
		$.ajax({
			url: '{{ route('aplicacion.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				nombreCorto : $("#nombreCorto").val(),
                nombreCompleto : $("#nombreCompleto").val(),
                alias : $("#alias").val(),
                descripcion : $("#descripcion").val()
			},
			success: function(response) {
				location.reload();  // recarga la pagina
			}
		});
	});

	// evento click en los elementos con la clase 'open-confirm-delete'
	$(document).on('click', '.open-confirm-delete', function() {
		unloadMask('content-form-delete');
		$('#btn-delete').val($(this).val());
		$('#label-registro').html($(this).attr('name'));
		$('#modal-confirm-delete').modal('show');
	});

	// evento click en el elemento con id 'btn-delete'
	$(document).on('click', '#btn-delete', function() {
		loadMask('content-form-delete');
		$.ajax({
			url: '{{ route('aplicacion.delete') }}',
			type: 'POST',
			data: {
				id : $(this).val(),
			},
			success: function(response) {
				location.reload();  // F5
			}
		});
	});

</script>
