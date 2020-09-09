var container = document.querySelector('main');
container.innerHTML = setAboutMe();

var aboutMeMenu = document.querySelector('#aboutMe');
var curriculumMenu = document.querySelector('#curriculum');
var portfolioMenu = document.querySelector('#portfolio');

aboutMeMenu.onclick = () => container.innerHTML = setAboutMe();

curriculumMenu.onclick = () => container.innerHTML = setCurriculum();

portfolioMenu.onclick = () => {
    container.innerHTML = setPortfolio();

    var carouselScript = document.createElement('script');
    carouselScript.id = 'carouselScript';
    carouselScript.setAttribute('src', 'js/carousel.js');

    var html = document.querySelector('html');
    html.appendChild(carouselScript);
}
