$('.slider__wrapper').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
});
$('.action__slider-inner').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
            }
        }
    ]
});
$('.slick-next,.slick-prev').addClass('animate__fadeIn');


$('.services__box, .price__box').hover(
    function () {
        $(this).find('object').contents().find('svg').addClass("journey");
    },
    function () {
        $(this).find('object').contents().find('svg').removeClass("journey");
    });
$('.services__box').on('mouseover', function() {
  $(this).find('svg').children().css({
    'fill': 'white',
    'stroke': 'white'
  });
});
function myFunction() {
    // Объявить переменные
    var input, filter, ul, li, w, i;
    input = document.getElementById("text-to-find");
    filter = input.value.toUpperCase();
    ul = document.getElementById("price");
    li = ul.getElementsByTagName("li");
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (i = 0; i < li.length; i++) {
        w = li[i].getElementsByClassName("price__bottom-name")[0];
        console.log(li);
        if (w.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";


        } else {
            li[i].style.display = "none";
        }
    }

}
$('[data-fancybox="gallery"]').fancybox({
    protect: true,
    toolbar: true,
    infobar: false,
    buttons: ["close"],
});

jQuery(document).ready(function () {

    $(".phone").mask("+380 (99) 999-99-99");


    jQuery('.send-form').click(function () {
        var form = jQuery(this).closest('form');

        if (form.valid()) {
            form.css('opacity', '.5');
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    form.html(data);
                    form.css('opacity', '1');
                    //form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
                },
                error: function () {
                    form.find('.status').html('серверная ошибка');
                }
            });
        }
    });


});

setTimeout(function () {

    var max = 204;
    var tot, str;
    var img = $('.vacancy__box-arrow');
    $('.vacancy__box-text').each(function () {
        str = String($(this).html());
        tot = str.length;
        str = (tot <= max) ?
            str :
            str.substring(0, (max + 1)) + "...";
        $(this).html(str);
    });






    $('.menu__mobile-burger').click(function (event) {
        $('.menu__mobile-one, .menu__mobile-burger').toggleClass('active');
    });

    $(".menu__list-two ul").hide();
    $(".menu__list-two ").click(function () {

        $(this).siblings()
            .children(".menu__list-two ul")
            .slideUp("slow");
        $(this)
            .children(".menu__list-two ul")
            .slideToggle("slow");
        $(this).toggleClass('active');
    });


    $(".submenu").hide();
    $(".menu__mobile-two").click(function () {

        $(this).siblings()
            .children(".submenu")
            .slideUp("fast", "linear");
        $(this)
            .children(".submenu")
            .slideToggle("fast", "linear");
        $(this).toggleClass('active');
    });



    $(".mobile-info").hide();
    $(".mobile-img").click(function () {

        $(this).siblings()
            .children(".mobile-info")
            .slideUp("slow");

        $(this)
            .children(".mobile-info")
            .slideToggle("slow");
        $(this).toggleClass('activeHeader');
    });
});
$('.menu__mobile-burger.active').click(function () {
    $(".submenu").hide();
});



$(document).ready(function(){
    $(window).scroll(function () {
/*если прокрутка больше 300 показ. кнопку*/
        if ($(this).scrollTop() > 300) {
            $('.arrowTop, .alert').fadeIn();
           
/*если нет то скрываем кнопку*/
        } 
        if ($(this).scrollTop() > 100) {
           
            $('.menu').css('position','fixed').css('top','0px');
/*если нет то скрываем кнопку*/
        }else {
            $('.arrowTop, .alert').fadeOut();
            $('.menu').css('position','relative');
        }
    });
/*при клике по кнопке переходим вверх стр.*/
    $('.arrowTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});        

new fullpage('#fullpage', {
	autoScrolling:true
});
