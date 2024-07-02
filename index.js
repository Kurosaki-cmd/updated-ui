// code for increasing the width of the search bar 
document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.querySelector('.search-box .input');
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.remove('focused');
        }
    });
});

const tl = gsap.timeline();
const navbarLi = document.getElementsByClassName('navbar-top-li');
const navbarBottomLi = document.getElementsByClassName('navbar-li-bottom');

// Animated navbar

gsap.from('.navbar-top-li', {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out"
});

// Animated navbar bottom elements and hero text
tl.from('.navbar-li-bottom, .hero-text h1', {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out"
});

// Infinite horizontal scrolling for feature row
document.addEventListener('DOMContentLoaded', function () {
    const featureRow = document.querySelector('.feature-row');
    const headings = document.querySelectorAll('.feature-heading');

    headings.forEach((heading) => {
        const clone = heading.cloneNode(true);
        featureRow.appendChild(clone);
    });

    const totalWidth = headings.length * (headings[0].offsetWidth + 20);

    gsap.to(featureRow, {
        x: -totalWidth,
        ease: 'linear',
        duration: 30,
        repeat: -1
    });
});

// Animated feature cards with ScrollTrigger
const featureCards = document.querySelectorAll('.feature-card-column');

featureCards.forEach((card, index) => {
    gsap.from(card, {
        duration: 0.5,
        x: -100,
        opacity: 0,
        stagger: 0.2,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: '.feature-card-row',
            start: 'top top', // when the top of the trigger hits the top of the viewport
            end: '+=500', // end after scrolling 500px beyond the start
            scrub: 1,
        }
    });
});
