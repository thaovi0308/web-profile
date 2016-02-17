$(window).scroll(function(){
      if ($(this).scrollTop() > 135) {
          $('div.masthead').addClass('masthead-fixed');
      } else {
          $('div.masthead').removeClass('masthead-fixed');
      }
  });
  // Only run the sliding in when we are greater than tablet.
if (($(window).width() >= 660)) {

    // Grab all of our zones
    var zone = $('#WhatYouGetWrap, #WhoWeAreWrap, #WhyScorpionWrap, #ContactForm, #GooglePremierPartnerContent');

    $(window).scroll(function() {
        // Get the top and bottom positions of our screen
        var wTop = $(window).scrollTop(),
            wBottom = wTop + $(window).height();


        // Run each zone through our function 1 by 1
        zone.each(function(i) {
            // Get the current zone's top and bottom position.
            // Minus and plus hieght * .25 gives us a little wiggle room to keep things in view.
      var height = zone.eq(i).outerHeight(),
        top = zone.eq(i).offset().top + (height * 0.25),
        bottom = top + zone.eq(i).height() - (height * 0.25);
              //bottom = top + zone.eq(i).height() - (height * 0.25); original code

            if(zone.eq(i) == '#WhyScorpionWrap') {
            //top = zone.eq(i).offset().top + (height * 0.75);
          //  bottom = top + zone.eq(i).height();

            }



            // Check to see if our zone is fully in view
            if ( (bottom <= (wBottom + 125 )) && (top >= wTop  ) ) {
                // Make sure we haven't already animated in
                if ( !zone.eq(i).hasClass('show') ) {
                    // Add the show class to animate in
                    zone.eq(i).addClass('show');
                }
            }
            // Get rid of the else statement if you don't want to animate out and come back
            // in each time you scroll the zone in and out of view.
            else {
                // Check to see if we need to animate out.

                  if ( zone.eq(i).hasClass('show') ) {
                      // Remove the show class to animate out
                      if(!zone.eq(i).hasClass('wsw-wrap')) {
                        zone.eq(i).removeClass('show');
                      }
                  }

            }

        });
    });
}

$(document).ready(function(){
  if($(window).width() < 660) {
    $('.mobile-btn.wygb icon').click(function(){
      $(this).parent().toggleClass('showing');
      $('.wyg-content-wrap').slideToggle();
    });

    $('.mobile-btn.wsw icon').click(function(){
      $(this).parent().toggleClass('showing');
      $('.wsw-wrap .main').slideToggle();
    });
  }
});
$( ".show" ).click(function() {
    if($(this).hasClass("show2")){
        $(this).removeClass("show2");
        $(this).addClass("show1");
    }
    else{
        $(this).removeClass("show1");
        $(this).addClass("show2");
    }
    $(this).parent().children(".toggle").toggle( "fold", 1000 );
});
