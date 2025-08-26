import introAnimation from './modules/introAnimation';
import contentFadeIn from './modules/contentFadeIn';
import aboutTextResponsiveChanger from './modules/aboutTextResponsiveChanger';
import navButtonAndResponsiveChanger from './modules/navButtonAndResponsiveChanger';
import scrollFadeIn from './modules/scrollFadeIn';

introAnimation();

window.addEventListener('DOMContentLoaded', () => {
    contentFadeIn();
    aboutTextResponsiveChanger();
    navButtonAndResponsiveChanger();
    scrollFadeIn();
});
window.addEventListener('resize', () => {
    aboutTextResponsiveChanger();
    navButtonAndResponsiveChanger();
});

/*
document
    .getElementById('contact-form')
    .addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        alert(result.message || result.error);
    });
*/