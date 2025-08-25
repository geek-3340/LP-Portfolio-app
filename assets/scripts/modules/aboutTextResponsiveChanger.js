export default function aboutTextResponsiveChanger() {
    const $aboutDes = document.querySelector('.about-description');
    if (window.matchMedia('(max-width: 767px)').matches) {
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
}
