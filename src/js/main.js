$(window).load(function(e){
  $(".search-overlay__close, #open-search").click(function(){
    e.preventDefault();
    $(".search-overlay").toggleClass("no-show");
  })
})

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
  	items: 1,
  	touchDrag: true,
  	autoplay: true,
  	autoplaySpeed: 1000

})
})