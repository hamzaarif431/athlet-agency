$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        autoplay:true,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 2
    });
});


// roaster-parent
$(document).ready(function(){
  $(".plus-slide").click(function(){
    let x = $(this).parents('.roaster-parent');
    x.children(".roster-body-hide-section").slideToggle()
    return false;
  });
});


$('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
});




$(document).ready(function () {
$('.media-slide').slick({
     infinite: true,
        autoplay:true,
        dots: false,
        arrows: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1
});
});


      
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
