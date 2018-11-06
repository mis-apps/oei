<script>

	$(document).on('click', '.open-form-rol', function() {
		unloadMask('content-form-rol');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('rol.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#nombre').val(response.nombre);
					$('#descripcion').val(response.descripcion);
					$('#modal-form-rol').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#nombre').val('');
			$('#descripcion').val('');
			$('#modal-form-rol').modal('show');
		}
	});

	$(document).on('click', '#btn-save-rol', function() {
		loadMask('content-form-rol');
		$.ajax({
			url: '{{ route('rol.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				nombre : $("#nombre").val(),
				descripcion : $("#descripcion").val()
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
			url: '{{ route('rol.delete') }}',
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