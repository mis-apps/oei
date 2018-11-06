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
					<th>Nombre</th>
					<th class="text-center">Posición</th>
					<th></th>
					@if($recurso->puedeModificar)
					<th></th>
					@endif
					@if($recurso->puedeEliminar)
					<th></th>
					@endif
				</tr>
			</thead>
			<tbody>
				@foreach ($modulosList as $idx=>$modulo)
				<tr>
					<td>{{ $idx + 1 }}.</td>
					<td>{{ $modulo->nombre }}</td>
					<td class="text-center"> {{ $modulo->posicion }}</td>
					<td class="text-center">
						<a href="{!! url('/recurso') !!}/{{ $modulo->id }}" ="button" class="btn btn-xs btn-info">
							<i class="fa fa-sitemap"></i> <span class="hidden-xs">Recursos</span>
						</a>
					</td>
					@if($recurso->puedeModificar)
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-warning open-form-modulo" value="{{ $modulo->id }}">
							<i class="fa fa-pencil"></i> <span class="hidden-xs">Editar</span>
						</button>
					</td>
					@endif
					@if($recurso->puedeEliminar)
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-danger open-confirm-delete" value="{{ $modulo->id }}" name="{{ $modulo->nombre }}">
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
				<button type="button" class="btn btn-sm btn-primary open-form-modulo" value="">
					Nuevo
				</button>
			</div>
		</div>
		@endif
	</div>
</div>
@include('modulo.form')
@stop

@section('scripts')
@include('modulo.js')
@stop
