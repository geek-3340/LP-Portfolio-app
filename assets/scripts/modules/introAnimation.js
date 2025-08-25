export default function introAnimation() {
    const intro = document.getElementById('intro');
    intro.addEventListener('animationend', (e) => {
        if (e.animationName === 'introFadeOut') {
            intro.style.display = 'none';
            content.style.display = 'block';
            document.body.style.removeProperty('overflow');
        }
    });
}
