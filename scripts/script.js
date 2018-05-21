$(document).ready(function(){

  // var $draggable = $('.draggable').draggabilly();

  $('.ja').on('click', function() {
    $('.ja').hide()
    $('.t').hide()
    $('.i').hide()
    $('.e').html('Е ');
  });

  $('.b').on('hover', function() {
    $(this).html('B');
  });

  $('.other').on('click', function() {
    $('.post').toggleClass('gone');
  });


});
