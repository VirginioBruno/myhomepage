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
                Since I was a little kid I wanted to do something related with technology, so I started playing video games like many others, after some years searching for a job a found the coding. At the beginning I suffered like many others too, but as I learned about it I fell in love.
            </p>
            <p>
                So, now that you know me better, stay free to see my skills and profile.
            </p>
        </article>
    `;
}

