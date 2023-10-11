(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
      /**
     * Clients Slider
     */
    new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
        },
        breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 120
        }
        }
    });
    // /**
    //  * Init swiper slider with 1 slide at once in desktop view
    //  */
    // new Swiper('.slides-1', {
    //     speed: 600,
    //     loop: true,
    //     autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //     },
    //     slidesPerView: 'auto',
    //     pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //     },
    //     navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //     }
    // });

    // /**
    //  * Init swiper slider with 3 slides at once in desktop view
    //  */
    // new Swiper('.slides-3', {
    //     speed: 600,
    //     loop: true,
    //     autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //     },
    //     slidesPerView: 'auto',
    //     pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //     },
    //     navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //     },
    //     breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 40
    //     },

    //     1200: {
    //         slidesPerView: 3,
    //     }
    //     }
    // });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

