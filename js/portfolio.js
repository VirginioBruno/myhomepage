var container = document.querySelector('.container');

function setPortfolio() {
    container.innerHTML = '';
    fadeIn(container);
    return `
        <div class="carousel-wrapper">
            <div class="carousel">
                <img class="carousel__photo initial" src="images/commandRegister.png">
                <img class="carousel__photo" src="images/commandRegister2.png">
                <img class="carousel__photo" src="images/aircnc1.png">
                <img class="carousel__photo" src="images/aircnc2.png">
                <img class="carousel__photo" src="images/aircnc3.png">
                <img class="carousel__photo" src="images/connectedWorker.png">
                <img class="carousel__photo" src="images/tagModal.png">
                    
                <div class="carousel__button--next"></div>
                <div class="carousel__button--prev"></div>
            </div>
        </div>
        <div class='git-span'>
            <span>See my projects at my <a href="https://github.com/VirginioBruno">github</a>.</span>
        </div>
    `;
}

