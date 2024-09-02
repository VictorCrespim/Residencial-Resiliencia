$(document).ready(function() {
    $('#mobile_btn'). on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');
    });

    $(document).ready(function() {
        // Função para ocultar a tela de carregamento e exibir o conteúdo principal
        setTimeout(function() {
            $('#loading-screen').css('opacity', '0');
            $('#loading-screen').on('transitionend', function() {
                $('#loading-screen').hide();
                $('#main-content').fadeIn();
            });
        }, 1000); // 3 segundos de espera antes de ocultar a logo
    });

    ScrollReveal().reveal('#cta', {
        origin:'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin:'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#sobrenos_logo', {
        origin:'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.sobrenos-conteudo', {
        origin:'rigth',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.info-section', {
        origin:'rigth',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.map-section', {
        origin:'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.depoimento-conteudo', {
        origin:'rigth',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.servico-content-direita', {
        origin:'rigth',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.servico-content-esquerda', {
        origin:'left',
        duration: 1000,
        distance: '20%'
    });
});