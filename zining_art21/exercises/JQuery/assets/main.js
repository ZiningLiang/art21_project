$(document).ready(function(){
  $("#start").click(function(){
    var div = $("div");  
    startAnimation();
    function startAnimation(){
      div.animate({
      opacity: '0.5',
      height: '500px',
      width: '500px'
      }, 3000);

      div.animate({
        opacity: '1',
        height: '100px',
        width: '100px'
      }, 3000, startAnimation)
    };
  })
  
  $("#stop").click(function(){
  	$("div").stop(true);
  });
});