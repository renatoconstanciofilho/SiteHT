$(function() {
  $('#btn_inicio').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
  });

  $('#btn_vantagens').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
  });

  $('#btn_sobre').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top  - ($anchor.height() + 50)}, 1000,'swing');
  });

   $('#btn_sobre2').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - ($anchor.height() + 50)}, 1000,'swing');
  });

  $('#btn_quem_somos').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - ($anchor.height() + 100)}, 1000,'swing');
  });

  $('#btn_contato').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - ($anchor.height() + 50)}, 1000,'swing');
  });
});