const $hero = document.getElementById('js-hero');

// heroセクションが表示されたときにフェードイン
window.addEventListener('DOMContentLoaded', () => {
    $hero.classList.add('fade-in');
});

if (window.matchMedia('(max-width: 767px)').matches) {
    const $humButton = document.getElementById('js-humButton');
    const $humLines = document.querySelectorAll('.hum-lines');
    const $siteNav = document.getElementById('js-siteNav');
    const $filter = document.getElementById('js-bgFilter');

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

    $humButton.addEventListener('click', ()=>{
        humHandler();
        navHandler();
    });
}
