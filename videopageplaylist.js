//Importing lower navbar for video page

import {g, videolowernavbarFunc, allVideos, allVideosClick, categoryVideos, categoryVideosClick, playlistVideos, playlistVideosClick} from "./videolowernavbar.js"




//Function containing all the click functionality of lower navbar

let clickFunc = () => {

    allVideosClick();

    categoryVideosClick();

    playlistVideosClick();

}

//Function calling for lower navbar and its different functionalities

g('lowernavbar').innerHTML = videolowernavbarFunc();

playlistVideos();

clickFunc();