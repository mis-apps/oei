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
					<th>Dominio</th>
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
				@foreach ($dominiosList as $idx=>$dominio)
				<tr>
					<td>{{ $idx + 1 }}.</td>
					<td>{{ $dominio->dominio }}</td>
					<td>{{ $dominio->valor }}</td>

					@if($recurso->puedeModificar)
						<td class="text-center">
							<button type="button" class="btn btn-xs btn-warning open-form-dominio" value="{{ $dominio->id }}">
								<i class="fa fa-pencil"></i> <span class="hidden-xs">Editar</span>
							</button>
						</td>
					@endif

					@if($recurso->puedeEliminar)
						<td class="text-center">
							<button type="button" class="btn btn-xs btn-danger open-confirm-delete" value="{{ $dominio->id }}" name="{{ $dominio->dominio }} - {{ $dominio->valor }}">
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
					<button type="button" class="btn btn-sm btn-primary open-form-dominio" value="">
						Nuevo
					</button>
				</div>
			</div>
		@endif
	</div>
</div>
@include('dominio.form')
@stop

@section('scripts')
@include('dominio.js')
@stop