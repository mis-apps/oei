<script>

	// evento click en los elementos con la clase 'open-form-criterio'
	$(document).on('click', '.open-form-criterio', function() {
		unloadMask('content-form-criterio');
		const id = $(this).val();
		if(id != '') {
			$.ajax({
				url: '{{ route('criterio.form') }}',
				type: 'POST',
				data: {id : id},
				success: function(response) {
					$('#id').val(response.id);
					$('#criterio').val(response.criterio);
                    $('#codigo').val(response.codigo);
                    $('#valor').val(response.valor);
					$('#modal-form-criterio').modal('show');
				}
			});
		} else {
			$('#id').val('');
			$('#criterio').val('');
            $('#codigo').val('');
            $('#valor').val('');
			$('#modal-form-criterio').modal('show');
		}
	});

	// evento click en el elemento con id 'btn-save-criterio'
	$(document).on('click', '#btn-save-criterio', function() {
		loadMask('content-form-criterio');
		$.ajax({
			url: '{{ route('criterio.save') }}',
			type: 'POST',
			data: {
				id : $("#id").val(),
				criterio : $('#criterio').val('');
                codigo : $('#codigo').val('');
                valor : $('#valor').val('');

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
			url: '{{ route('criterio.delete') }}',
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
