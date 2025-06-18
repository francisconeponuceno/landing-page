$(document).ready(function() {
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scroLLPosition = $(window).scroLLTop() - header.outerHeight();
        
        let activeSectionIndex = 0;

        if (scroLLPosition <= 0) {
            header.css('box-shadow', 'none');
        } else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scroLLPosition >= sectionTop && scroLLPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScroLLReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
});


