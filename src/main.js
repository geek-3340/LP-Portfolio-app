const $hero = document.getElementById('js-hero');
const $siteNav = document.getElementById('js-siteNav');
const $humButton = document.getElementById('js-humButton');
const $humLines = document.querySelectorAll('.hum-lines');
const $filter = document.getElementById('js-bgFilter');
const $aboutDes = document.querySelector('.about-description');

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
        $aboutDes.innerHTML =
            '<p>' +
            'はじめまして、HIJIRIと申します！<br />' +
            '私は現在Webエンジニア転職を目指して<br />' +
            '日々学習に取り組んでおります。<br />' +
            '学習を始めて10ヶ月ほど経ち、未だ<br />' +
            'ポートフォリオが無いことに気付いたので<br />' +
            'フロントエンドのスキルを活かして<br>' +
            'このポートフォリオサイトを作成しました。<br />' +
            '<br />' +
            '学習を通じて、HTML/CSS/JavaScript<br>' +
            'の基礎から始まり、PHPやLaravel、PostgreSQL<br />' +
            'などのバックエンド技術にも触れています。<br />' +
            'また、Dockerを使った開発環境の構築や、<br>' +
            'Figmaを使ったデザインの実装にも挑戦しています。<br />' +
            '<br />' +
            'このポートフォリオサイトでは、私の学習の<br>' +
            '成果やスキルセットを紹介しています。<br />' +
            '今後、実際のプロジェクトや開発経験も追加して<br>' +
            'いく予定です。ぜひご覧ください！' +
            '</p>';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
        $siteNav.innerHTML =
            '<ul>' +
            '<li><a href="#">TOP</a></li>' +
            '<li><a href="#about">About Me</a></li>' +
            '<li><a href="#skills">Skills</a></li>' +
            '<li><a href="#works">Works</a></li>' +
            '<li><a href="#footer">Links & Contact</a></li>' +
            '</ul>';
        $aboutDes.innerHTML =
            '<p>' +
            'はじめまして、HIJIRIと申します！<br />' +
            '私は現在Webエンジニア転職を目指して日々学習に取り組んでおります。<br />' +
            '学習を始めて10ヶ月ほど経ち、未だポートフォリオが無いことに気付いたので<br />' +
            'フロントエンドのスキルを活かしてこのポートフォリオサイトを作成しました。<br />' +
            '<br />' +
            '学習を通じて、HTML/CSS/JavaScriptの基礎から始まり、<br />' +
            'PHPやLaravel、PostgreSQLなどのバックエンド技術にも触れています。<br />' +
            'また、Dockerを使った開発環境の構築や、' +
            'Figmaを使ったデザインの実装にも挑戦しています。<br />' +
            '<br />' +
            'このポートフォリオサイトでは、私の学習の成果やスキルセットを紹介しています。<br />' +
            '今後、実際のプロジェクトや開発経験も追加していく予定です。<br />' +
            'ぜひご覧ください！' +
            '</p>';
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
