
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  	$(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
	licenseKey: 'FBA2A933-1E6941E5-99A5E62C-9F7FBBD6',
	sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F'],
	sectionSelector: '.vertical-scrolling',
	slideSelector: '.horizontal-scrolling',
	navigation: true,
	lockAnchors: true,
	anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
	menu: '#menu',

	afterLoad: function(anchorLink, index) {
		$header_top.css('background', 'rgba(0, 47, 77, .3)');
		$nav.css('background', 'rgba(0, 47, 77, .25)');
		if (index == 5) {
			$('#fp-nav').hide();
		}
	},

	onLeave: function(index, nextIndex, direction) {
		if(index == 5) {
			$('#fp-nav').show();
		}
	} 
}); 