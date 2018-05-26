$(document).ready(function(){

  var $draggable = $('.draggable').draggabilly();

  $('.ja').on('click', function() {
    $('.ja').hide()
    $('.t').hide()
    $('.i').hide()
    $('.e').html('Е ');
    $('.me').show();
  });

  // $('.b').on('hover', function() {
  //   $(this).html('B');
  // });

  $(".pictures > div").throwable({
                      containment:[0,0,1400,780],
                      drag:true,
                      gravity:{x:1,y:1},
                      impulse:{
                          f:152,
                          p:{x:1,y:1}
                      },
                      shape:"circle",
                      autostart:true,
                      bounce:9999,
                      damping:1,
                      areaDetection:[[0,0,300,300]],
                      collisionDetection: true
                  });

});
