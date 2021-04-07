
$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $hour.css('transform', 'rotate(' + (360/24 * h) + 'deg)');
    $minute.css('transform', 'rotate(' + (360/60 * m) + 'deg)');
    $second.css('transform', 'rotate(' + (360/60 * s) + 'deg)');

    setTimeout(updateClock, clockUpdateSpeed);
  }
  updateClock();
});
