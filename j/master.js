var jQT = new $.jQTouch({
    icon: 'jqtouch.png',
    statusBar: 'black-translucent',
    preloadImages: [],
    flipSelector: 'flip',
    cubeSelector: 'cube'
});

$(function() {
  $('#jqt').bind('touchmove',function(){
      event.preventDefault();
  });
  $('#page1').swipe(function(e, info){
      jQT.goTo($('#page2'), 'flip');
  });
  $('#page2').swipe(function(e, info){
      jQT.goBack('#page1');
  })
})

