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
