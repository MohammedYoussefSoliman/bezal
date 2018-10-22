$(".crMain").mouseover(function() {
	$(this).find('#imgOver').animate({opacity:'1', height: '100%'},400, stop());
});
$(".crMain").mouseleave(function() {
	$(this).find('#imgOver').animate({opacity:'0', height: '90%'},400, stop());
});



var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

$(window).scroll(function(){
    if ($(this).scrollTop()>100) {
    $("nav").addClass('change');
    $(".nav-link").addClass('changed');
    $(".navUl").addClass('navUledited');
    $('.navbar-brand').html('<img src="img/logo-dark.png" class="img-fluid">');
}else{
    $("nav").removeClass('change');
    $(".nav-link").removeClass('changed');
    $(".navUl").removeClass('navUledited');
    $('.navbar-brand').html('<img src="img/logo-light.png" class="img-fluid">');
}
});


var typed = new Typed('#typo', {
  strings: ["apps", "websites", "softwares"],
  typeSpeed: 40,
  startDelay: 500,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
});

