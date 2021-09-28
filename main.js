
document.querySelectorAll('.header__menu, .header__burger ')
    .forEach(i => i.addEventListener('click', (event) => {
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector('.header__burger').classList.toggle('active')
        document.body.classList.add('lock')
    }))



$(function (){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: ' <button type="button" class="slick-arrow slick-next"><img src="images/right-arrow.svg"></button>',
        prevArrow: ' <button type="button" class="slick-arrow slick-prev"><img src="images/left-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
        ]
    });
})


$(function (){
    $('.partners-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1600,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: null,
        prevArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
        ]
    });
})
