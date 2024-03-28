// Funcion para programar el funcionamiento de carrusel
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 8000,
    pause: "false"
  });
});

// Funcion para personalizar el color de fondo del navbar
$(document).scroll( function() {
  const y = $("html").scrollTop();
    if(y > 850) $('.navbar').addClass("bg-black")
    else $('.navbar').removeClass("bg-black")
});

// Funcion para personalizar la velocidad del scroll al ir a un enlace
var $root = $('html, body');

$('a').click(function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var href = this.hash;
    $root.animate({
      scrollTop: $(href).offset().top
    }, 1000);
  }
});
