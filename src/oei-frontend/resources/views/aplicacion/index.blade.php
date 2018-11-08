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
					<th>Nombre Corto</th>
					<th>Nombre Completo</th>
					<th>Alias</th>
					<th>Descripcion</th>

					@if($recurso->puedeModificar)
						<th></th>
					@endif

					@if($recurso->puedeEliminar)
						<th></th>
					@endif
				</tr>
			</thead>
			<tbody>
				@foreach ($aplicacionesList as $idx=>$aplicacion)
				<tr>
					<td>{{ $idx + 1 }}.</td>
					<td>{{ $aplicacion->nombreCorto }}</td>
                    <td>{{ $aplicacion->nombreCompleto }}</td>
                    <td>{{ $aplicacion->alias }}</td>
                    <td>{{ $aplicacion->descripcion }}</td>

					@if($recurso->puedeModificar)
						<td class="text-center">
							<button type="button" class="btn btn-xs btn-warning open-form-aplicacion" value="{{ $aplicacion->id }}">
								<i class="fa fa-pencil"></i> <span class="hidden-xs">Editar</span>
							</button>
						</td>
					@endif

					@if($recurso->puedeEliminar)
						<td class="text-center">
							<button type="button" class="btn btn-xs btn-danger open-confirm-delete" value="{{ $aplicacion->id }}" name="{{ $aplicacion->nombreCorto }} - {{ $aplicacion->nombreCompleto }} - {{ $aplicacion->alias }} - {{ $aplicacion->descripcion }}">
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
					<button type="button" class="btn btn-sm btn-primary open-form-aplicacion" value="">
						Nuevo
					</button>
				</div>
			</div>
		@endif
	</div>
</div>
@include('aplicacion.form')
@stop

@section('scripts')
@include('aplicacion.js')
@stop
