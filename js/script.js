var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});

$(function(){
 var shrinkHeader = 10;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
       $('.navbar').addClass('shrink');
      }
      else {
        $('.navbar').removeClass('shrink');
      }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
