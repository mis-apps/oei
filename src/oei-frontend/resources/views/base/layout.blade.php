<!DOCTYPE html>

<html lang="es">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>{{ config('app.name') }} - @yield('titulo')</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/bootstrap/dist/css/bootstrap.css') }}">
  <link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/font-awesome/css/font-awesome.min.css') }}">
  <link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/Ionicons/css/ionicons.min.css') }}">
  <link rel="stylesheet" href="{{ URL::asset('adminlte/css/AdminLTE.css') }}">
  <link rel="stylesheet" href="{{ URL::asset('adminlte/css/skins/skin-blue.min.css') }}">
  <!-- Data tables -->
  <link rel="stylesheet" href="{{ URL::asset('adminlte/bower_components/datatables.net-bs/css/dataTables.bootstrap.css') }}">
  <!-- Propios -->
  <link rel="stylesheet" href="{{ URL::asset('css/oei.css') }}">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  @yield('styles')
</head>

<body class="hold-transition skin-blue sidebar-mini">
  @verificaSession
  <div class="wrapper">

    <!-- Main Header -->
    @include('base.header')
    <!-- sidebar-menu -->
    @include('base.menu')

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>@yield('titulo_pagina')</h1>
        @yield('breadcrumb')
      </section>
      <!-- Main content -->
      <section class="content container-fluid">
        @yield('contenido')
      </section>

    </div>

    <!-- Main Footer -->
    @include('base.footer')
  </div>
  @else
  <section class="content container-fluid">
    @yield('contenido')
  </section>
  @endverificaSession

  <!-- REQUIRED JS SCRIPTS -->
  <script src="{{ URL::asset('adminlte/bower_components/jquery/dist/jquery.min.js') }}"></script>
  <script src="{{ URL::asset('adminlte/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
  <script src="{{ URL::asset('adminlte/js/adminlte.min.js') }}"></script>
  <!-- Data tables -->
  <script src="{{ URL::asset('adminlte/bower_components/datatables.net/js/jquery.dataTables.js') }}"></script>
  <script src="{{ URL::asset('adminlte/bower_components/datatables.net-bs/js/dataTables.bootstrap.js') }}"></script>
  <script src="{{ URL::asset('adminlte/bower_components/jquery-slimscroll/jquery.slimscroll.js') }}"></script>
  <script src="{{ URL::asset('adminlte/bower_components/fastclick/lib/fastclick.js') }}"></script>
  <!-- Propios -->
  <script src="{{ URL::asset('js/oei.js') }}"></script>
  <script>
    $(function () {
      $('#tabla-principal').DataTable({
        'paging'      : false,
        'lengthChange': false,
        'searching'   : false,
        'ordering'    : false,
        'info'        : false,
        'autoWidth'   : false
      })
    });
  </script>
  @yield('scripts')

</body>
</html>