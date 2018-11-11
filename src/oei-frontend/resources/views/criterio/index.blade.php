@extends('base.layout')
@section('titulo', $recurso->titulo)
@section('titulo_pagina', $recurso->titulo)

@section('contenido')
<div class="box">
	<div class="box-body">

		<table id="tabla-principal" class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>#</th>
					<th>Criterio</th>
                    <th>Codigo</th>
                    <th>Valor</th>

					@if($recurso->puedeModificar)
						<th></th>
					@endif

					@if($recurso->puedeEliminar)
						<th></th>
					@endif
				</tr>
			</thead>
			<tbody>
				@foreach ($criteriosList as $idx=>$criterio)
				<tr>
					<td>{{ $idx + 1 }}.</td>
					<td>{{ $criterio->criterio }}</td>
                    <td>{{ $criterio->codigo }}</td>
                    <td>{{ $criterio->valor }}</td>

					@if($recurso->puedeModificar)
						<td class="text-center">
							<button type="button" class="btn btn-xs btn-warning open-form-criterio" value="{{ $criterio->id }}">
								<i class="fa fa-pencil"></i> <span class="hidden-xs">Editar</span>
							</button>
						</td>
					@endif

					@if($recurso->puedeEliminar)
						<td class="text-center">
							<button type="button" class="btn btn-xs btn-danger open-confirm-delete" value="{{ $criterio->id }}" name="{{ $criterio->criterio }} - {{ $criterio->codigo }} - {{ $criterio->valor }}">
								<i class="fa fa-trash"></i> <span class="hidden-xs">Eliminar</span>
							</button>
						</td>
					@endif
				</tr>
				@endforeach
			</tbody>
		</table>

		@if($recurso->puedeCrear)
			<div class="row">
				<div class="col-xs-12 text-left">
					<button type="button" class="btn btn-sm btn-primary open-form-criterio" value="">
						Nuevo
					</button>
				</div>
			</div>
		@endif
	</div>
</div>
@include('criterio.form')
@stop

@section('scripts')
@include('criterio.js')
@stop
