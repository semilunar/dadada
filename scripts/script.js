$(document).ready(function(){


  // var $draggable = $('.draggable').draggabilly();

  $('.ja').on('click', function() {
    $('.ja').hide()
    $('.t').hide()
    $('.i').hide()
    $('.e').html('Е ');
    $('.me').show();
  });

  $('.b').on('hover', function() {
    $(this).html('B');
  });

  $('.nothing').on('click', function() {
    $(".pictures").hide();
    $(".article").hide();
    document.body.style.color = '#000';
  });




});
