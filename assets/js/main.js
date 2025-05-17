// Constants
const MOBILE_BREAKPOINT = 768;
const SWIPER_CONFIG = {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 20
};

// Initialize Swiper only on mobile devices
if (window.innerWidth < MOBILE_BREAKPOINT) {
    const swiper = new Swiper('.swiper', {
        ...SWIPER_CONFIG,
        allowTouchMove: true
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
        if (!document.querySelector('.swiper').swiper) {
            const swiper = new Swiper('.swiper', {
                ...SWIPER_CONFIG,
                allowTouchMove: true
            });
        }
    } else {
        if (document.querySelector('.swiper').swiper) {
            document.querySelector('.swiper').swiper.destroy();
        }
    }
});