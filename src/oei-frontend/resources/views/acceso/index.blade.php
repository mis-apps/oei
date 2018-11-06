<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title> {{ config('app.name') }} </title>
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
	<link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/font-awesome/css/font-awesome.min.css') }}">
	<link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/Ionicons/css/ionicons.min.css') }}">
	<link rel="stylesheet" href="{{ URL::asset('adminlte/css/AdminLTE.min.css') }}">
	<link rel="stylesheet" href="{{ URL::asset('adminlte/plugins/iCheck/square/blue.css') }}">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
	<style>
	div#btn-ingresar {margin: 30px; height: 40px;}
	div#message-error {padding-top: 10px;}
</style>

</head>
<body class="hold-transition login-page">
	<div class="login-box">

		<div class="login-box-body">
			<h4><p class="login-box-msg">Inicio de Sesión</p></h4>

			<form action="{{ route('login') }}" method="post" autocomplete="off">
				<div class="form-group has-feedback">
					<input type="text" id="username" name="username" required="true" class="form-control" placeholder="Usuario">
					<span class="glyphicon glyphicon-user form-control-feedback"></span>
				</div>
				<div class="form-group has-feedback">
					<input type="password" name="password" required="true" class="form-control" placeholder="Contraseña">
					<span class="glyphicon glyphicon-lock form-control-feedback"></span>
				</div>
				<div id="btn-ingresar" class="row">
					<div class="col-xs-12">
						<button type="submit" class="btn btn-primary btn-block btn-flat">Ingresar</button>
					</div>
					@if(Session::has('message'))
					<div class="col-xs-12 text-center"" id="message-error">
						<p class="text-red">{{ Session::get('message') }}</p>
					</div>
					@endif
				</div>
			</form>
		</div>

	</div>

	<!-- jQuery 3 -->
	<script src="{{ URL::asset('adminlte/bower_components/jquery/dist/jquery.min.js') }}"></script>
	<script src="{{ URL::asset('adminlte/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
	<script src="{{ URL::asset('adminlte/plugins/iCheck/icheck.min.js') }}"></script>
	<script>
		$(document).ready(function(){
			$("#username").focus();
		});
	</script>

</body>
</html>
