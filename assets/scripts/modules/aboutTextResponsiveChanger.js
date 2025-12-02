Export default function aboutTextResponsiveChanger() {
    const $aboutDes = document.querySelector('.about-description');
    
    // --- モバイル表示（max-width: 767px）向け ---
    if (window.matchMedia('(max-width: 767px)').matches) {
        $aboutDes.innerHTML =
            '<p>' +
            'はじめまして、HIJIRIと申します！<br />' +
            '私は現在、Webアプリケーション開発に必要な<br />' +
            '技術を一通り習得し、制作活動を行っております。<br />' +
            '<br />' +
            'このポートフォリオサイトは、<br />' +
            'フロントエンドからバックエンドまで、<br />' +
            '私が習得したスキルを総合的に<br />' +
            '表現するために構築いたしました。<br />' +
            '<br />' +
            'HTML/CSS/JavaScriptはもちろん、<br>' +
            'PHP/Laravel、PostgreSQL、Dockerといった<br />' +
            'バックエンド技術を用いたCRUD開発や、<br />' +
            'FigmaからのUIデザイン実装にも対応可能です。<br />' +
            '<br />' +
            'ご興味を持っていただけましたら、<br />' +
            'ぜひ制作実績をご覧ください。<br />' +
            'プロジェクトのご相談もお待ちしております。' +
            '</p>';
    
    // --- デスクトップ表示（min-width: 768px）向け ---
    } else if (window.matchMedia('(min-width: 768px)').matches) {
        $aboutDes.innerHTML =
            '<p>' +
            'はじめまして、HIJIRIと申します！<br />' +
            '私は現在、Webアプリケーション開発に必要な技術を一通り習得し、制作活動を行っております。<br />' +
            'このポートフォリオサイトは、フロントエンドからバックエンドまで、私が習得したスキルを総合的に表現するために構築いたしました。<br />' +
            '<br />' +
            'HTML/CSS/JavaScriptはもちろん、PHP/Laravel、PostgreSQL、Dockerといった<br />' +
            'バックエンド技術を用いたCRUD開発や、FigmaからのUIデザイン実装にも対応可能です。<br />' +
            '<br />' +
            'ご興味を持っていただけましたら、ぜひ制作実績をご覧ください。プロジェクトのご相談もお待ちしております。<br />' +
            '</p>';
    }
}
