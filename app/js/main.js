// ===============================//
// ============= Libs ===========//
// ==============================//
@@include('libs/jquery.js')
@@include('libs/jquery.fancybox.min.js')
@@include('libs/owl.carousel.min.js')
@@include('libs/mask.js')
@@include('libs/mask-phone.js')
@@include('libs/headhesive.js')
@@include('libs/parallax.min.js')
@@include('libs/validate.js')
@@include('libs/scroll.js')
// ==============================//
// =========== Libs ===============//
// ==============================//

// =================================//
// ============= Partials ==========//
// =================================//
// ===============================//
// ========= END Partials ========//
// ===============================//
 
$(document).ready(function(){
    var header = new Headhesive(".header", {
	    offset: 1000,
	});

    $("[data-scroll]").mPageScroll2id({
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
        offset: 100,
        onStart:function(){
            $('[data-mobilnav]').removeClass('active');
            $('body').removeClass('body_hidden');
        },
    });

    $('body').on('click','[data-hamburger]', function(){
        $('[data-mobilnav]').toggleClass('active');
        $('body').toggleClass('body_hidden');
    });

    // Получаем ширину скроллбара
    function get_scrollbar_width(){
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        
        // мы должны вставить элемент в документ, иначе размеры будут равны 0
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();
        console.log(scrollWidth);
        
        return scrollWidth;
    }
    // END Получаем ширину скроллбара

    $('[data-modal-show]').click(function(){
        var id = $(this).attr('data-modal-show');
        $('[data-modal="'+id+'"]').addClass('active');
        var scrollbar_width = get_scrollbar_width();
        $('body').css('padding-right', scrollbar_width+'px');
        $('.headhesive').css('padding-right', scrollbar_width+'px');
        $('body').addClass('body_hidden');
    });

    $('[data-modal-close]').click(function(){
        var id = $(this).attr('data-modal-close');
        $('[data-modal="'+id+'"]').removeClass('active');
        setTimeout(function(){
            $('body').css('padding-right', '0');
            $('.headhesive').css('padding-right', '0');
            $('body').removeClass('body_hidden');
        },300);
    });

    $('[data-modal]').click(function(){
        var thisvar = $(this);
        if ($(event.target).closest(".modal").length) return;
        thisvar.removeClass('active');
        setTimeout(function(){
            $('body').css('padding-right', '0');
            $('.headhesive').css('padding-right', '0');
            $('body').removeClass('body_hidden');
        },300);
    });



    $.validator.addMethod(
        "phone",
        function (value) {
            return value.replace(/\D+/g, "").length >= 11;
        },
        "Введите номер телефона полностью"
    );

    $('[data-mask="phone"]').mask('+7 (999) 999-9999');
});