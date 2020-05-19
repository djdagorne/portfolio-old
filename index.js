function navBoldText(event){
    $('.js-nav-button').on('click', event => {
        event.preventDefault();
        const currentPage = $(event.currentTarget);
        const otherPage = $('.js-nav-button').not(currentPage);
        const pressedBool = $(currentPage).attr('aria-pressed') === 'true';

        otherPage.removeClass('js-pressed').attr('aria-pressed', false);
        currentPage.addClass('js-pressed').attr('aria-pressed', false);
    });
};

function renderProjects(){
    $('main').html(`
        <h2>Projects</h2>
        <div class ="projArea">
            <h3>Tennit</h3>
            <span class="fab fa-html5 "></span>
            <span class="fab fa-css3-alt"></span>
            <span class="fab fa-js "></span>
            <span class="fab fa-react"></span>
            <span class="fas fa-database"></span>
            <span class="fas fa-server"></span>


            <img src="images/Capture1.PNG" alt="Screenshot of Tennit React Client" class="screenshot">
            <p class="projBlerb">
                A satirical dating app above moving in with people to save on rent. 
                Full stack React app made with vanilla CSS, Express Server and postgreSQL database.
                Included is functional messaging, matching, searching, logging in with expiring web tokens, password hashing
                and a weird sense of humor. Give Heroku's Hobby Dev backend a moment to log you in, thanks :)
            </p>
            <span class="project-link"><a href="https://tennit.djdagorne.now.sh/">Live</a></span>
            <span class="project-link"><a href="https://github.com/djdagorne/tennit-client">Client Repo</a></span>
            <span class="project-link"><a href="https://github.com/djdagorne/tennit-server">Server Repo</a></span>
        </div>
        <div class ="projArea">
            <h3>Concertfinder</h3>
            <span class="fab fa-html5 "></span>
            <span class="fab fa-js "></span>
            <img src="images/search-screen.PNG" alt="Screenshot of Concertfinder App" class="screenshot">
            <p class="projBlerb">
                A concert lookup web application, using last.fm Tastemaker and Ticketmasters Eventfinder API's, jQuery, vanilla CSS, HTML.
            </p>
            <span class="project-link"><a href="https://djdagorne.github.io/concertfinder/">Live</a></span>
            <span class="project-link"><a href="https://github.com/djdagorne/concertfinder">Repo</a></span>
        </div>
        <div class ="projArea">
            <h3>Nintendo Trivia App</h3>
            <span class="fab fa-html5 "></span>
            <span class="fab fa-js "></span>
            <img src="images/quiz-app-crop1.png" alt="Screenshot of Nintendo Quiz" class="screenshot">
            <p class="projBlerb">
                A 10 question quiz web application, using jQuery, CSS, HTML.
            </p>
            <span class="project-link"><a href="https://djdagorne.github.io/quiz-app/">Live</a></span>
            <span class="project-link"><a href="https://github.com/djdagorne/quiz-app">Repo</a></span>
        </div>
      `);
      
};

function renderAbout(){
    $('main').html(`
        <h2>Bio</h2>
        <p>
            Ever since I was a kid in middle school, I've been tinkering with everything computer related I could get my hands on.
            Building my own PC's, modding games, 2D & 3D digital art, and of course programming to tie it all together. 
            The incredible versatile power of modern computers has always captivated and inspired me. A good
            chunk of time later, here I am, looking to make it in web development, where I can explore ideas and technologies with
            as many other people as I can.
        </p>
      `);
};

function renderHome(){
    $('main').html(`
        <h2>Hello!</h2>
        <p>
            My name is Dexter Dagorne. I like playing DND, low quality memes, 
            and making computers do my bidding. Feel free to check out 
            some of those biddings!
        </p>
      `);
};

function handlePage(){
    //renderProjects();
    renderHome();
    navBoldText();
    $(".navButtons").on('click', '.projects-button', function(event){
        renderProjects();
    });
    $(".navButtons").on('click', '.home-button', function(event){
        renderHome();
    });
    $(".navButtons").on('click', '.about-button', function(event){
        renderAbout();
    });
};

$(handlePage);