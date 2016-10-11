// Main JS File Unminified 
$(function(){

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});
  // Scroll to 
    $('[rel="scrollTo"]').click(function() {
        event.preventDefault();
        var tag = $(this).attr('data-scrollTo');
        scrollToAnchor(tag);
    });
    function scrollToAnchor(aid){
        var aTag = $('#'+ aid +'');
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }
    

  /*
   * Video Player Modal
   * 
   * 
  */
  $('a[rel="videoPlayerToggle"]').click(function(event) {

    event.preventDefault();
    var videoID = $(this).attr('data-videoID');
   
    $('#videoPlayerContainer iframe').attr('src','https://player.vimeo.com/video/'+videoID+'?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0');
    $('#videoPlayerContainer').show('slow');
    
  });
  $('#videoPlayerContainer').click(function() {
    $('#videoPlayerContainer').hide('fast');
    $('#videoPlayerContainer iframe').attr('src','');
  });

  if($('#oneVideoSample').length != 0) {
    $('#oneVideoText div').hide();
    var thisVideoID = getParameterByName('vid');
    $('#oneVideoSample iframe').attr('src','https://player.vimeo.com/video/'+thisVideoID+'?autohide=1&modestbranding=1&rel=0&showinfo=0');
    //$('#oneVideoSample iframe').attr('src','https://player.vimeo.com/video/'+thisVideoID+'?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0');
    $('#v-'+thisVideoID).show();
    $('#oneVideoText').show();
    $('#oneVideoSample').show();
    
  }
  // Get params in url
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

});