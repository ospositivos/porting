var flag=true;
if ($(window).width() > 980) {

$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_titlein = 1200;
  var scroll_titleout = 1600;
  var scroll_freeze = 2400;
  var scroll_citein = 1850;
  var scroll_citeout = 2200;
  var scroll_freeze2 = 3000;
  var scroll_fucksin = 83225;
  var scroll_fucksout = 89900;
  var scroll_outro = 83900;

  if (flag) {
	// title
    if(y_scroll_pos > scroll_titlein & y_scroll_pos < scroll_titleout) {
      $( "#disclosure h1" ).fadeIn( "3000", function() {});
    } else if(y_scroll_pos < scroll_titlein || y_scroll_pos > scroll_titleout) {
      $( "#disclosure h1" ).fadeOut( "slow", function() {});
      }
    }
  // freeze title
  if(y_scroll_pos > scroll_freeze) {
    flag = false;
    $('#disclosure h1').addClass("loose");
  }
  // cite
  if(y_scroll_pos > scroll_citein & y_scroll_pos < scroll_citeout) {
    $( "#forscholars blockquote" ).fadeIn( "slow", function() {});
  }
  // fucks
  if(y_scroll_pos > scroll_fucksin & y_scroll_pos < scroll_fucksout) {
    $( "#fucks" ).fadeIn( "100", function() {});
    $('.not').css('visibility','hidden');
  } else if(y_scroll_pos < scroll_fucksin ||y_scroll_pos > scroll_fucksout) {
    $( "#fucks" ).fadeOut( "100", function() {});
	$('.not').css('visibility','visible');
  }
  // show outro
  if (y_scroll_pos > scroll_fucksin & y_scroll_pos > scroll_outro) {
    $('#outro').css('visibility','visible');
  } else  if (y_scroll_pos > scroll_fucksin & y_scroll_pos < scroll_outro) {
    $('#outro').css('visibility','hidden');
  }
});

} else {
  //$('#disclosure').css('height','auto');
  $('#disclosure h1').addClass("loose");
  $('#forscholars').css('min-height','270px');
  $('#forscholars blockquote').css({'z-index':'1000','display':'block'});
  $('#fucks').css({'height':'200px','position':'relative'});
  $('#fucks .rip').css({'margin':'0','display':'block'});
}
