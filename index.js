function stickyNav(){

};

function renderProjects(){
    $('main').html(`
    <h2>Projects </h2>
    <div class ="projArea">
    <h3>filler text etc</h3>
    <div class="screenshot">screenshot goes here</div>
    
    <p class="projBlerb">
    filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler 
    </p>
    <span class="project-link"><a href="#">Live</a></span>
    <span class="project-link"><a href="#">Repo</a></span>
  </div>
  <div class ="projArea">
        <h3>filler text etc</h3>
        <div class="screenshot">screenshot goes here</div>
        
        <p class="projBlerb">
        filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler 
        </p>
        <span class="project-link"><a href="#">Live</a></span>
        <span class="project-link"><a href="#">Repo</a></span>
      </div>
      <div class ="projArea">
        <h3>filler text etc</h3>
        <div class="screenshot">screenshot goes here</div>
        
        <p class="projBlerb">
        filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler 
        </p>
        <span class="project-link"><a href="#">Live</a></span>
        <span class="project-link"><a href="#">Repo</a></span>
      </div>
      <div class ="projArea">
        <h3>filler text etc</h3>
        <div class="screenshot">screenshot goes here</div>
        
        <p class="projBlerb">
        filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler 
        </p>
        <span class="project-link"><a href="#">Live</a></span>
        <span class="project-link"><a href="#">Repo</a></span>
      </div>
      <div class ="projArea">
        <h3>filler text etc</h3>
        <div class="screenshot">screenshot goes here</div>
        
        <p class="projBlerb">
        filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler 
        </p>
        <span class="project-link"><a href="#">Live</a></span>
        <span class="project-link"><a href="#">Repo</a></span>
      </div>
      
      `);//<img src="images/quiz-app-crop1.png" alt="Screenshot of Nintendo Quiz" class="screenshot">
      
};

function renderAbout(){
    $('main').html(`
    <h2>Bio </h2>
      <p>
          Ever since I was a kid in middle school, I've been tinkering with everything computer related I could get my hands on.
          Building my own PC's, modding games, 2D & 3D digital art, and of course programming to tie it all together. 
          The incredible versatile power of modern computers has always captivated and inspired me. A good
          chunk of time later, here I am, looking to make it in web development, where I can explore ideas and technologies,
          and see where all this might end up leading me.
      </p>
      `);
};

function renderHome(){
    $('main').html(`
    <h2>Well hello!</h2>
    <p>
        I am Dexter Dagorne. I like DotA, low quality memes, 
        and making computers do my bidding. Feel free to check out 
        some of those biddings!
    </p>
      `);
};

function handlePage(){
    renderHome();
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