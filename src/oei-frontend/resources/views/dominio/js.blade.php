<script>

	// evento click en los elementos con la clase 'open-form-dominio'
	$(document).on('click', '.open-form-dominio', function() {
		unloadMask('content-form-dominio');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('dominio.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#dominio').val(response.dominio);
					$('#valor').val(response.valor);
					$('#modal-form-dominio').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#dominio').val('');
			$('#valor').val('');
			$('#modal-form-dominio').modal('show');
		}
	});

	// evento click en el elemento con id 'btn-save-dominio'
	$(document).on('click', '#btn-save-dominio', function() {
		loadMask('content-form-dominio');
		$.ajax({
			url: '{{ route('dominio.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				dominio : $("#dominio").val(),
				valor : $("#valor").val()
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
			url: '{{ route('dominio.delete') }}',
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
