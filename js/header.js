var the_header_html = `
<header>
    <nav>
      <div class="row" id="nav1">
        <div class="col col-4"><a href="index.html">Inicio</a></div>
        <div class="col col-4"><a href="catalogue.html">Otros proyectos</a></div>
        <div class="col col-4"><a href="about.html">Sobre nosotros</a></div>
      </row>
      <div class="row">
        <div class="col col-md-12 float-md-left" id="nav2">
          <a href="" class="btn btn-info" data-toggle="modal" data-target="#modalLoginAvatar"
            id="btn-ingresar">Ingresar</a>
        </div>
      </div>

      <!--Modal: Login with Avatar Form-->
      <div class="modal fade" id="modalLoginAvatar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
          <!--Content-->
          <div class="modal-content">


            <!--Header-->
            <div class="modal-header">
              <img src="/assets/profile.svg" alt="avatar" class="rounded-circle img-responsive">
            </div>
            <!--Body-->
            <div class="modal-body text-center mb-1">

              <h5 class="mt-1 mb-2">John Doe</h5>

              <div class="md-form ml-0 mr-0">
                <input type="password" type="text" id="form29" class="form-control form-control-sm validate ml-0">
                <label data-error="wrong" data-success="right" for="form29" class="ml-0">Enter password</label>
              </div>

              <div class="text-center mt-4">
                <button class="btn btn-info btn-link text-dark border border-primary rounded-pill">Login <i class="fas fa-sign-in-alt"></i></button>
              </div>
      </div>
  
</header>  `;

document.getElementById("theheader").innerHTML = the_header_html;
