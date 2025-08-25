import introAnimation from './modules/introAnimation';
import contentFadeIn from './modules/contentFadeIn';
import aboutTextResponsiveChanger from './modules/aboutTextResponsiveChanger';
import navButtonAndResponsiveChanger from './modules/navButtonAndResponsiveChanger';
import windowsEntriesFadeIn from './modules/windowsEntriesFadeIn';

introAnimation();

window.addEventListener('DOMContentLoaded', () => {
    contentFadeIn();
    aboutTextResponsiveChanger();
    navButtonAndResponsiveChanger();
    windowsEntriesFadeIn();
});
window.addEventListener('resize', () => {
    aboutTextResponsiveChanger();
    navButtonAndResponsiveChanger();
});
