$(document).ready(function () {
        //super slide
        $('#slides').superslides({
            animation: 'fade',
            play: '4000',
            pagination: false
        });

        // typed.js
        var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
            strings: ['Web Developer', 'Digital Marketer','Web API Developer','Web Developer' ],
            loop:true,
            showCursor: false,
            typeSpeed: 60,
            startDelay: 200,
        });

        //owl carousel
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
    });



    var skillsTopOffset = $('.skillsection').offset().top;
    $(window).scroll(function () {
        if(window.pageYOffset > skillsTopOffset - $(window).height()+200){
            //Easy pie - chart
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep:function (from,to,percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    })

    //Fancy App
    $("[data-fancybox]").fancybox();
    //Isotope
    $('.items').isotope({
        filter:'*',
        animationOptions:{
            duration:1500,
            easing: 'linear',
            queue: false,
        }
    });

    //Sort & Filtering
    $('.filters a').click(function () {
        $('.filters a').removeClass('current');
        $(this).addClass('current');

        var selector =$(this).attr('data-filter');
        $('.items').isotope({
            filter:selector,
            animationOptions:{
                duration:1500,
                easing: 'linear',
                queue: false,
            }
        });
        return false;

    });


})