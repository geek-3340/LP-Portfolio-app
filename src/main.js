const $hero = document.getElementById('js-hero');

// heroセクションが表示されたときにフェードイン
window.addEventListener('DOMContentLoaded', () => {
    $hero.classList.add('fade-in');
});

if (window.matchMedia('(max-width: 767px)').matches) {

    const $humButton = document.getElementById('js-humButton');
    const $humLines = document.querySelectorAll('.hum-lines');
    const $siteNav=document.getElementById('js-siteNav');

    const humHandler = () => {
        $humLines.forEach((line) => {
            if (!line.classList.contains('is-active')) {
                line.classList.add('is-active');
                $siteNav.classList.add('is-active');
            } else {
                line.classList.remove('is-active');
                $siteNav.classList.remove('is-active');
            }
        });
    };

    $humButton.addEventListener('click', humHandler);
}
