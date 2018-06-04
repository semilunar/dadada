$(document).ready(function(){

  var $draggable = $('.draggable').draggabilly();

  $('.ja').on('click', function() {
    $('.ja').hide()
    $('.t').hide()
    $('.i').hide()
    $('.e').html('Е ');
    $('.me').show();
    $('.clickme2').hide();
    $('.clickme').hide();
  });

  $('.b').on('hover', function() {
    $(this).html('B');
  });

    $('.clickme').on('click', function() {
      $('.clickme2').show();
        $(this).hide();
    });

});
