// scroll animation function
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

})

//scrollspy to highlight active block
$('body').scrollspy({ target: '.navbar' })



$(".about, .activities, .blog").hover(
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).addClass('open');
    },
    function () {
        $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).removeClass('open');
    });
