$(document).ready(function(){
  var $draggable = $('.draggable').draggabilly();


  $('.ja').on('click', function() {
    $('.ja').hide()
    $('.t').hide()
    $('.e').html('Е ');
    });


    $('.b').on('hover', function() {
      $(this).html('B');
      });

    $('.main').on('hover', function() {
      $(this).toggleClass('gone');
      });



});
