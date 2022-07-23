function navbar(){
    return`  <div id="search">
    <a id="anchor" href="../index.html"><img id="logcon"  src="https://www.cricbuzz.com/images/cb_logo.svg" /></a>
    

    <div class="navbar">

      <div class="dropdown">
       <a href="../livescore/livescore.html"><button class="dropbtn" >LIVE SCORE  </button></a>
      </div>
  
  
      <div class="dropdown">
      <a href="../schedule/schedule.html"><button class="dropbtn" >SCHDULE</button></a>
      </div>
  
  
      <div class="dropdown">
        <a href="https://www.cricbuzz.com/cricket-scorecard-archives"><button class="dropbtn" >ARCHIVES</button></a>
      </div>
  
  
      <div class="dropdown">
       <a hrf="https://www.cricbuzz.com/cricket-news"> <button class="dropbtn" >NEWS
          <i class="fa fa-caret-down"></i>
        </button></a>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <a href="../news/allstories.html">All Stories</a>
              <a href="../news/cricbuzzplus.html">Cricbuzz Plus</a>
              <a href="../news/news.html">Latest News</a>
              <a href="../news/topic.html">Topics</a>
              <a href="../news/spotlight.html">Spotlight</a>
              <a href="../news/allstories.html">Opinions</a>
              <a href="../news/allstories.html">Specials</a>
              <a href="../news/allstories.html">Stats & Analysis</a>
              <a href="../news/allstories.html">Interviews</a>
              <a href="../news/allstories.html">Live Blogs</a>
              <a href="../news/allstories.html">Harsha Bhogle</a>
            </div>
        </div>
      </div>
      </div>
  
      <div class="dropdown">
       <a> <button class="dropbtn" >SERIES
          <i class="fa fa-caret-down"></i>
        </button></a>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <a href="#">India tour of West Indies, 2022</a>
              <a href="#">Pakistan tour of Sri Lanka, 2022</a>
              <a href="#">Sout Africa tour of England, 2022</a>
              <a href="#">New Zealand tour of West Ireland 2022</a>
              <a href="#">Country championship Division, 2022</a>
              <a href="#">Tamil Nadu Premier league 2022</a>
              <a href="#">South Africa Women tour of England, 2022</a>
              <a href="#">Womens T20| Tri-Series in Ireland, 2022</a>
              <a href="#">All series  </a>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="dropdown">
     <a> <button class="dropbtn" >TEAMS
          <i class="fa fa-caret-down"></i>
        </button></a>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <h3>TEST TEAM</h3>
              <a href="#">India</a>
              <a href="#">Ireland</a>
              <a href="#">Pakistan</a>
              <a href="#">Australia</a>
              <a href="#">Sri Lanka</a>
              <a href="#">Bangladesh</a>
              <a href="#">England</a>
              <a href="#">West Indies</a>
              <a href="#">South Africa</a>
              <a href="#">Zimbabwe</a>
              <a href="#">New Zealand</a>
              <a href="#">Afghanistan</a>
            </div>
            <div class="column">
              <h3>ASSOCIATE</h3>
              <a href="#">Italy</a>
              <a href="#">Botswana</a>
              <a href="#">Belgium</a>
              <a href="#">Iran</a>
              <a href="#">Denmark</a>
              <a href="#">Singapore</a>
              <a href="#">Namibia</a>
              <a href="#">Uganda</a>
              <a href="#">Malaysia</a>
              <a href="#">Nepal</a>
              <a href="#">Germany</a>
              <a href="#">Canada</a>
           </div>
          </div>
        </div>
      </div>
  
      <div class="dropdown">
     <a>  <button class="dropbtn" >VIDEOS
          <i class="fa fa-caret-down"></i>
        </button></a>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <a href="../videopage/videopageall.html">All Videos</a>
              <a href="../videopage/videopagecategory.html">Catagories</a>
              <a href="../videopage/videopageplaylist.html">Playlists</a>
          </div>
        </div>
      </div>
      </div>
  
      <div class="dropdown">
       <a> <button class="dropbtn" >RANKING
          <i class="fa fa-caret-down"></i>
        </button></a>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <a href="#">ICC Ranking-Men</a>
              <a href="#">ICC Ranking-Women</a>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="dropdown">
        <a><button class="dropbtn" >MORE
          <i class="fa fa-caret-down"></i>
        </button></a>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <a href="#">World Test championship</a>
              <a href="#">World cup super league</a>
              <a href="#">Quiz</a>
              <a href="#">Photos</a>
              <a href="#">Mobile Apps</a>
              <a href="#">Careers</a>
              <a href="#">contact Us</a>
            </div>
          </div>
        </div>
      </div>
  
      <div id="cricketbuzz" class="dropdown" >
   <a href="../news/cricbuzzplus.html"> <button id="cricol" class="dropbtn">CRICKETBUZZ PLUS</button></a>
        </div>
      </div>


    <div id="sin">
      <h3><a href=""><img id="search_icon" src="https://img.icons8.com/small/16/FFFFFF/search--v1.png" ></a></h3>
    </div> 
     <div>
      <a href="../navbar/login.html"><img id="account" src="https://img.icons8.com/small/16/FFFFFF/user-male-circle.png" /></a>
    </div>
  </div> 
</div>
<div id="navbar1">
        <a href="livescore.html">MATCHES</a>
        <a href="">LKK vs NRK-Live</a>
        <a href="">IND vs WI-IND Won</a>
        <a href="">RSAW vs ENGW-Live</a>
        <a href="">PAKW vs AUSW-Prev</a>
        <a href="">IRE vs NZ-NZ-Won</a>
    </div>`
}
function footer(){
  return `
        <img src="../navbar/footer.png" alt="">
    `
}
export {navbar,footer};