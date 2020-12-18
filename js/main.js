$(document).ready(function(){
    $('.gallery').slick({
        dots: true,
        infinite: false,
        buttons: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    dots: false   
                }
            }
        ]
    });
});