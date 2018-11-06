@extends('base.layout')
@section('titulo', 'Página no autorizada')

@section('contenido')
<div class="error-page">
	<h3 class="headline text-red"> 403</h3>
	<div class="error-content">
		<h3><i class="fa fa-warning text-red"></i> Página no autorizada</h3>
		<p>
			No tienes permiso para acceder a esta página.
			Por favor verifica.
		</p>
	</div>
</div>
@stop
