
// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function() {
	$(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
	menu: '#menu',
	licenseKey: 'FBA2A933-1E6941E5-99A5E62C-9F7FBBD6',
	sectionsColor: ['#000', '#1d1d1d', '#000', '#1d1d1d'],
	sectionSelector: '.vertical-scrolling',
	slideSelector: '.horizontal-scrolling',
	navigation: true,
	navigationPosition: 'right',
	scrollBar: false,
	anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],

	afterLoad: function(anchorLink, index) {
		$header_top.css('background', 'rgba(0, 47, 77, .3)');
		$nav.css('background', 'rgba(0, 47, 77, .25)');
		if (index == 4) {
			$('#fp-nav').hide();
		}
	},

	onLeave: function(index, nextIndex, direction) {
		if(index == 4) {
		  $('#fp-nav').show();
		}
	}
}); 

$(window).scroll(function() {
    var hT = $('#skill-bar-wrapper').offset().top,
        hH = $('#skill-bar-wrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-1.4*wH)){
        jQuery(document).ready(function(){
            jQuery('.skillbar-container').each(function(){
                jQuery(this).find('.skills').animate({
                    width:jQuery(this).attr('data-percent')
                }, 5000); // 5 seconds
            });
        });
    }
 });

var carousel = $("#carousel").featureCarousel({
	// include options like this:
	// (use quotes only for string values, and no trailing comma after last option)
	// option: value,
	// option: value
	captionBelow: true,
	stopOnHover: true,
	autoPlay: 7000
});
