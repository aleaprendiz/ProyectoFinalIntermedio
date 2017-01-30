$(document).ready(function () {


  $('.carousel').carousel();

   $('.parallax').parallax();

  /*
  $(".dropdown-button").dropdown();
  */



//Funcion para cambiar el fonto de la pagina de forma aleatoria INICIO
var imagenes = ['img/s1.jpg',
    'img/s2.jpg', 'img/s3.jpg',
    'img/s4.jpg'];

    $(".imgFondo").css('background-image', 'url(' + imagenes[Math.floor(Math.random() * 4)] + ')');


});
