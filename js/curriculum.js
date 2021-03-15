var container = document.querySelector('.container');

function setCurriculum() {
    container.innerHTML = '';
    fadeIn(container);
    return `
        <article>
            <h2>Main Goal</h2>
            <p>
                For sure my main goal is keep learning and challenging me. I am always looking for those two things because I believe that these things will keeping me motivated and always wanting to evolve.
            </p>
            <hr>
            <div class="experiences">
                <h2>Experiences</h2>
                <h3>.Net Developer</h3>
                        
                <p>At Meta (Dell Team)</p>
                
                <p>Remote Work</p>
                
                <p>October 2020 until Current</p>

                <h3>.Net Developer</h3>
                    
                <p>At Electra DV</p>
                
                <p>Remote Work</p>
                
                <p>July 2019 until October 2020</p>

                <p>I work in the development and implementation of new features of the system, participating in the migration of the legacy code to a new architecture using .Net Core and creating patterns to be used. In the implementation step are used .Net Core, ASP Classic, JavaScript, JQuery, T-SQL, HTML, CSS and Bootstrap.</p>
                
                <h3>.Net Developer</h3>
                
                <p>At Zenatur Logistics Management and Transportation</p>
                
                <p>São Bernardo do Campo, São Paulo</p>
                
                <p>February 2018 until July 2019</p>
                
                <p>I worked in the development and implementation of the ERP and REST API system, performing the requirements gathering, coding and implementation of new features providing assistance to the end user. In the implementation step are used ASP.NET MVC, ASP Classic, JavaScript, JQuery, T-SQL, HTML, CSS3 and Bootstrap.</p>

                <h3>IT Trainee</h3>

                <p>At Zenatur Gestão Logistics Management and Transportation</p>
                
                <p>São Bernardo do Campo, São Paulo</p>
                
                <p>February 2017 until February 2018</p>
                
                <p>Assisted the entire team regarding system maintenance and order API, using SQL, ASP NET MVC, HTML, JavaScript and JQuery. It was an essential experience so that I could develop my skills with these technologies and understand the business related processes.</p>

                <h3>Technical Support Assistant</h3>

                <p>At IMT - Mauá - Institute Mauá of Technology</p>

                <p>São Caetano do Sul, São Paulo</p>

                <p>April 2016 until December 2016</p>

                <p>Assisted with technical support throughout the campus, solving problems, making corrections and providing support to students, faculty, staff and directors of the institution.</p>
            </div>
            <hr>
            <h2>Knowledges</h2>
            <p>
                C#, .NET Core, ASP Classic, API in .Net Core, HTML, CSS, Bootstrap, JavaScript, Typescript, Angular, JQuery, T-SQL and SQL Server.
            </p>
        </article>
    `;
}

