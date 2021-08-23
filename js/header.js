var the_header_html = `
<header>
    <nav>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="catalogue.html">Otros proyectos</a></li>
        <li><a href="about.html">Sobre nosotros</a></li>
      </ul>
      <div class="container-login">
        <div class="text-left">
          <a href="" class="btn btn-info" data-toggle="modal" data-target="#modalLoginAvatar"
            id="btn-ingresar">Ingresar</a>
        </div>
        </button>
      </div>

      <!--Modal: Login with Avatar Form-->
      <div class="modal fade" id="modalLoginAvatar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
          <!--Content-->
          <div class="modal-content">

            <!--Header-->
            <div class="modal-header">
              <img src="/assets/profile.jpg" alt="avatar" class="rounded-circle img-responsive">
            </div>
            <!--Body-->
            <div class="modal-body text-center mb-1">

              <h5 class="mt-1 mb-2">John Doe</h5>

              <div class="md-form ml-0 mr-0">
                <input type="password" type="text" id="form29" class="form-control form-control-sm validate ml-0">
                <label data-error="wrong" data-success="right" for="form29" class="ml-0">Enter password</label>
              </div>

              <div class="text-center mt-4">
                <button class="btn btn-cyan mt-1">Login <i class="fas fa-sign-in ml-1"></i></button>
              </div>
      </div>
  
</header>  `;

document.getElementById("theheader").innerHTML = the_header_html;
