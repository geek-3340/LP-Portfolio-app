export default function navButtonAndResponsiveChanger() {
    const $humButton = document.getElementById('js-humButton');
    const $humLines = document.querySelectorAll('.hum-lines');
    const $filter = document.getElementById('js-bgFilter');
    const $siteNav = document.getElementById('js-siteNav');

    if (!$humButton._listenerAdded) {
        $humButton.addEventListener('click', () => {
            $humLines.forEach((line) => {
                line.classList.toggle('is-active');
            });
            $siteNav.classList.toggle('is-active');
            $filter.classList.toggle('is-active');
        });
        $humButton._listenerAdded = true;
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
        $siteNav.innerHTML =
            '<ul>' +
            '<li><a href="#">TOP</a></li>' +
            '<li><a href="#about">About Me</a></li>' +
            '<li><a href="#skills">Skills</a></li>' +
            '<li><a href="#works">Works</a></li>' +
            '<li><a href="#links">Links</a></li>' +
            //'<li><a href="#contact">Contact</a></li>' +
            '</ul>';
    } else {
        $siteNav.classList.remove('is-active');
        $filter.classList.remove('is-active');
        $humLines.forEach((line) => {
            line.classList.remove('is-active');
        });
        /*
        $siteNav.innerHTML =
            '<ul>' +
            '<li><a href="#">TOP</a></li>' +
            '<li><a href="#about">About Me</a></li>' +
            '<li><a href="#skills">Skills</a></li>' +
            '<li><a href="#works">Works</a></li>' +
            '<li><a href="#footer">Links & Contact</a></li>' +
            '</ul>';
            */
    }
}
