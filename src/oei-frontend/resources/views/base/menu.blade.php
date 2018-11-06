<aside class="main-sidebar">
  <section class="sidebar">

    <ul class="sidebar-menu" data-widget="tree">

      <li class="header">{{ session('username') }} - {{ date('d/m/Y') }}</li>

      <!-- módulos del usuario -->
      @foreach ( session('modulos') as $modulo=>$recursos )
        <li class="treeview">
          <a href="#">
            <i class="fa fa-share"></i>
            <span> {{ $modulo }}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <!-- recursos del módulo -->
            @foreach ( $recursos as $nombreRecurso => $objetoRecurso )
              @if( $objetoRecurso->esMenu )
                <li id="menu-item-{{ $objetoRecurso->nombreRecurso }}">
                  <a href="{!! url('/' . $nombreRecurso) !!}"><i class="fa fa-circle-o"></i> {{ $objetoRecurso->titulo }} </a>
                </li>
              @endif
            @endforeach
          </ul>
        </li>
      @endforeach
    </ul>

  </section>
</aside>

@if (Session::has('menu-item'))
    <script>
      // codigo para mantener el último menu seleccionado expandido
      const idMenu = '{{ Session::get('menu-item') }}';
      const menuSelected = document.getElementById(idMenu);
      menuSelected.parentNode.parentNode.classList.add('active');
    </script>
@endif
