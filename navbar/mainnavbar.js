function navbar(){
    return`  <div id="search">
    <img id="logcon"  src="https://www.cricbuzz.com/images/cb_logo.svg" />
    

    <div class="navbar">

      <div class="dropdown">
       <a href="https://www.cricbuzz.com/cricket-match/live-scores"><button class="dropbtn" >LIVE SCORE  </button></a>
      </div>
  
  
      <div class="dropdown">
      <a href="../schedule.html"><button class="dropbtn" >SCHDULE</button></a>
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
              <a href="#">All Stories</a>
              <a href="#">Cricbuzz Plus</a>
              <a href="#">Latest News</a>
              <a href="#">Topics</a>
              <a href="#">Spotlight</a>
              <a href="#">Opinions</a>
              <a href="#">Specials</a>
              <a href="#">Stats & Analysis</a>
              <a href="#">Interviews</a>
              <a href="#">Live Blogs</a>
              <a href="#">Harsha Bhogle</a>
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
              <a href="../videopageall.html">All Videos</a>
              <a href="../videopagecategory.html">Catagories</a>
              <a href="../videopageplaylist.html">Playlists</a>
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
   <a> <button id="cricol" class="dropbtn">CRICKETBUZZ PLUS</button></a>
        </div>
      </div>


    <div id="sin">
      <h3><a href="login.html"><img id="search_icon" src="https://img.icons8.com/small/16/FFFFFF/search--v1.png" ></a></h3>
    </div> 
     <div>
      <a href="login.html"><img id="account" src="https://img.icons8.com/small/16/FFFFFF/user-male-circle.png" /></a>
    </div>
  </div> 
</div>`
}
export default navbar;