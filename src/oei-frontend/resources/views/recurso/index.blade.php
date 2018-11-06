@extends('base.layout')
@section('titulo', $recurso->titulo)
@section('titulo_pagina', $recurso->titulo . ' del módulo "' . $modulo->nombre . '"')
@section('breadcrumb')
<ol class="breadcrumb">
	<li><a href="{{ route('modulo') }}"><i class="fa fa-arrow-left"></i> Volver a Módulos</a></li>
</ol>
@stop

@section('contenido')
<div class="box">
	<div class="box-body">
		<table id="tabla-principal" class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>#</th>
					<th>Nombre</th>
					<th>Título</th>
					<th class="text-center">Menú</th>
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
				@foreach ($recursosList as $idx=>$recursoItem)
				<tr>
					<td>{{ $idx + 1 }}.</td>
					<td>{{ $recursoItem->nombre }}</td>
					<td>{{ $recursoItem->titulo }}</td>
					<td class="text-center">{{ $recursoItem->esMenu ? 'SI' : 'NO' }}</td>
					<td class="text-center">{{ $recursoItem->posicion }}</td>
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-success open-modal-permisos" value="{{ $recursoItem->id }}" name="{{ $recursoItem->titulo }}">
							<i class="fa fa-list"></i> <span class="hidden-xs">Permisos</span>
						</button>
					</td>
					@if($recurso->puedeModificar)
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-warning open-form-recurso" value="{{ $recursoItem->id }}">
							<i class="fa fa-pencil"></i> <span class="hidden-xs">Editar</span>
						</button>
					</td>
					@endif
					@if($recurso->puedeEliminar)
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-danger open-confirm-delete" value="{{ $recursoItem->id }}" name="{{ $recursoItem->titulo }}">
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
				<button type="button" class="btn btn-sm btn-primary open-form-recurso" value="">
					Nuevo
				</button>
			</div>
		</div>
		@endif
	</div>
</div>
@include('recurso.form')
@include('recurso.permisos')
@stop

@section('scripts')
@include('recurso.js')
@stop
