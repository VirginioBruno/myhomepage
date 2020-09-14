var container = document.querySelector('.container');

function setAboutMe() {
    container.innerHTML = '';
    fadeIn(container);
    return `
        <article>
            <h3>
                Hello! My name is Bruno and welcome to my page!
            </h3>
            <p>
                I am a software developer who loves technology and challenges, I suppose that if you are here, you are interested in knowing a little more about me. 
            </p>
            <p>
                Since I was a little kid I wanted to do something related with technology, so I started making corrections on my computer like many others, after some years looking for a job a found the development world. At the beginning I suffered like many others, but as I learned about it I fell in love.
            </p>
            <p>
                So, now that you know me better, feel free to see my curriculum and portfolio.
            </p>
        </article>
    `;
}

