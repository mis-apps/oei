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
					<th>Primer Apellido</th>
					<th>Segundo Apellido</th>
					<th>Nombres</th>
					<th>Username</th>
					<th>Estado</th>
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
				@foreach ($usuariosList as $idx=>$usuario)
				<tr>
					<td>{{ $idx + 1 }}.</td>
					<td>{{ $usuario->primerApellido }}</td>
					<td>{{ $usuario->segundoApellido }}</td>
					<td>{{ $usuario->nombres }}</td>
					<td>{{ $usuario->username }}</td>
					<td>{{ $usuario->estado }}</td>
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-success open-modal-roles" value="{{ $usuario->id }}" name="{{ $usuario->username }}">
							<i class="fa fa-list"></i> <span class="hidden-xs">Roles</span>
						</button>
					</td>
					@if($recurso->puedeModificar)
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-warning open-form-usuario" value="{{ $usuario->id }}">
							<i class="fa fa-pencil"></i> <span class="hidden-xs">Editar</span>
						</button>
					</td>
					@endif
					@if($recurso->puedeEliminar)
					<td class="text-center">
						<button type="button" class="btn btn-xs btn-danger open-confirm-delete" value="{{ $usuario->id }}" name="{{ $usuario->username }}">
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
				<button type="button" class="btn btn-sm btn-primary open-form-usuario" value="">
					Nuevo
				</button>
			</div>
		</div>
		@endif
	</div>
</div>
@include('usuario.form')
@include('usuario.roles')
@stop

@section('scripts')
@include('usuario.js')
@stop