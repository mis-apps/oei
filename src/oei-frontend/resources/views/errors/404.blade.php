@extends('base.layout')
@section('titulo', 'Página no encontrada')

@section('contenido')
<div class="error-page">
	<h3 class="headline text-yellow"> 404</h3>
	<div class="error-content">
		<h3><i class="fa fa-warning text-yellow"></i> Página no encontrada</h3>
		<p>
			No hemos podido encontrar la página que estas tratando de acceder.
			Por favor verifica.
		</p>
	</div>
</div>
@stop
