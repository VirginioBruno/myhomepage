var container = document.querySelector('.container');

function setCurriculum() {
    container.innerHTML = '';
    fadeIn(container);
    return `
        <div>
            <h2>Main Goal</h2>
            <p>
                For sure my main goal is keep learning and challenging me. I am always searching for those two things because I believe that this things will keeping me motivated and always wanting to evolution.
            </p>
            <hr>
            <h2>Experiences</h2>

                <h4>Remote Full Stack .Net Developer</h4>
                    
                <p>At Electra DV</p>
                
                <p>Remote Work</p>
                
                <p>July 2019 until Current</p>
                
                <h4>Full Stack .NET Developer</h4>
                
                <p>At Zenatur Gestão Logistica e Transportes</p>
                
                <p>São Bernardo do Campo, São Paulo</p>
                
                <p>February 2018 until July 2019</p>
                
                <p>I worked in the development and implementation of the ERP and REST API system, performing the requirements gathering, coding and implementation of new features providing assistance to the end user. In the implementation step is used ASP.NET MVC, ASP Classic, JavaScript, JQuery, T-SQL, HTML, CSS3 and Bootstrap.</p>

                <h4>T.I Trainee</h4>

                <p>At Zenatur Gestão Logistica e Transportes</p>
                
                <p>São Bernardo do Campo, São Paulo</p>
                
                <p>February 2017 until February 2018</p>
                
                <p>Assisted the entire team regarding system maintenance and order API, using SQL, ASP NET MVC, HTML, JavaScript and JQuery. It was an essential experience so that I could develop my skills with these technologies and understand the business related processes.</p>

                <h4>Technical Support Assistant</h4>

                <p>At IMT - Mauá - Instituto Mauá de Tecnologia</p>

                <p>São Caetano do Sul, São Paulo</p>

                <p>April 2016 until December 2016</p>

                <p>Assisted with technical support throughout the campus, solving problems, making corrections and providing support to students, faculty, staff and principals of the institution.</p>

            <hr>
            <h2>Knowledges</h2>
            <p>
                C#, ASP.NET Core, ASP Classic, API Rest, HTML, CSS, Bootstrap, JavaScript, React, JQuery, T-SQL and SQL Server.
            </p>
        </div>
    `;
}

