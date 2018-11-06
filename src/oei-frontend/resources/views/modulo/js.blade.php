<script>

	$(document).on('click', '.open-form-modulo', function() {
		unloadMask('content-form-modulo');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('modulo.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#nombre').val(response.nombre);
					$('#posicion').val(response.posicion);
					$('#modal-form-modulo').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#nombre').val('');
			$('#posicion').val('');
			$('#modal-form-modulo').modal('show');
		}
	});

	$(document).on('click', '#btn-save-modulo', function() {
		loadMask('content-form-modulo');
		$.ajax({
			url: '{{ route('modulo.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				nombre : $("#nombre").val(),
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
			url: '{{ route('modulo.delete') }}',
			type: 'POST',
			data: {
				id : $(this).val(),
			},
			success: function(response) {
				location.reload();
			}
		});
	});

</script>