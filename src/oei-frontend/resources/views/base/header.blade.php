<header class="main-header">

  <!-- Logo -->
  <span class="logo">
    <span class="logo-mini"><b>{{ config('app.name')  }}</b></span>
    <span class="logo-lg"><b>{{ config('app.name') }}</b></span>
  </span>

  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top" role="navigation">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <!-- Home Link -->
        <li>
          <a href="{{ route('principal') }}" ><i class="fa fa-home"></i></a>
        </li>
        <!-- User Account Menu -->
        <li class="dropdown user user-menu">
          <!-- Menu Toggle Button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-user"></i>
            <span class="hidden-xs">{{ session('nombreCompleto') }}</span>
          </a>
          <ul class="dropdown-menu">
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="#" class="btn btn-default btn-flat">
                  <i class="fa fa-folder-open-o"></i>
                  Ver Perfil
                </a>
              </div>
              <div class="pull-right">
                <a href="{{ route('logout') }}" class="btn btn-default btn-flat">
                  <i class="fa  fa-unlock-alt"></i>
                  Cerrar Sesión
                </a>
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>

</header>