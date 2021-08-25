var the_footer_html = `
  <footer>
  <div class="row bg-danger" id="infos">
  <div class="col col-sm-10 position-relative fixed-right text-right">
  <a href="#site.html" class="btn btn-dark" role="button" id="site-footer">Publica tu sitio</a>
    </div>
  </div>
  <div class="action">
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-danger rounded-circle text-dark">
      <i class="fas fa-phone-alt"></i><p id="con">Contactanos</p>
    </button>
    <button type="button" class="btn btn-danger rounded-circle text-dark">
      <i class="far fa-comments"></i><p id="tel">Telegram</p>
    </button>
    <button type="button" class="btn btn-danger rounded-circle text-dark">
      <i class="fas fa-heart"></i><p id="rec">Recomendanos</p>
    </button>
  </div>
</div>

</footer>  `;

document.getElementById("thefooter").innerHTML = the_footer_html;
