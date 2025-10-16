// Site Geliştirme ve Tasarım: mertdurgut

document.addEventListener('DOMContentLoaded', function () {

    // Animate On Scroll (AOS) Kütüphanesini Başlat
    AOS.init({
        duration: 800, // Animasyon süresi (milisaniye)
        once: true     // Animasyonlar sadece bir kere tetiklensin
    });

    // Navbar'ı sayfa kaydırıldığında değiştir
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobil menüdeki linklere tıklandığında menüyü kapat
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            // Eğer menü açıksa (mobil görünümde) kapat
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

    // Testimonial Slider (Swiper)
    const swiper = new Swiper('.testimonial-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Farklı ekran boyutları için ayarlar
        breakpoints: {
            // 768px ve üzeri ekranlar için
            768: {
                slidesPerView: 2,
            },
            // 992px ve üzeri ekranlar için
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Tema Değiştirici (Aydınlık/Karanlık Mod)
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    // Sayfa yüklendiğinde kayıtlı temayı uygula
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'light') {
            themeToggle.classList.add('light-mode');
        }
    }

    // Butona tıklandığında temayı değiştir
    themeToggle.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
            themeToggle.classList.remove('light-mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.classList.add('light-mode');
        }
    });
});