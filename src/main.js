const $hero = document.getElementById('js-hero');
const $siteNav = document.getElementById('js-siteNav');
const $humButton = document.getElementById('js-humButton');
const $humLines = document.querySelectorAll('.hum-lines');
const $filter = document.getElementById('js-bgFilter');


const navListChanger = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $siteNav.innerHTML =
            '<ul>' +
            '<li><a href="#">TOP</a></li>' +
            '<li><a href="#about">About Me</a></li>' +
            '<li><a href="#skills">Skills</a></li>' +
            '<li><a href="#works">Works</a></li>' +
            '<li><a href="#links">Links</a></li>' +
            '<li><a href="#contact">Contact</a></li>' +
            '</ul>';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
        $siteNav.innerHTML =
        '<ul>' +
        '<li><a href="#">TOP</a></li>' +
        '<li><a href="#about">About Me</a></li>' +
            '<li><a href="#skills">Skills</a></li>' +
            '<li><a href="#works">Works</a></li>' +
            '<li><a href="#footer">Links & Contact</a></li>' +
            '</ul>';
    }
};

window.addEventListener('resize', navListChanger);

// heroセクションが表示されたときにフェードイン
window.addEventListener('DOMContentLoaded', () => {
    $hero.classList.add('fade-in');
    navListChanger();
});

if (window.matchMedia('(max-width: 767px)').matches) {
    const humHandler = () => {
        $humLines.forEach((line) => {
            if (!line.classList.contains('is-active')) {
                line.classList.add('is-active');
            } else {
                line.classList.remove('is-active');
            }
        });
    };
    const navHandler = () => {
        if (!$siteNav.classList.contains('is-active')) {
            $siteNav.classList.add('is-active');
            $filter.classList.add('is-active');
        } else {
            $siteNav.classList.remove('is-active');
            $filter.classList.remove('is-active');
        }
    };

    $humButton.addEventListener('click', () => {
        humHandler();
        navHandler();
    });
}
