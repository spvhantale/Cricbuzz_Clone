
//Importing upper navbar

import {navbar,footer} from "../navbar/mainnavbar.js";

//Importing lower navbar for video page

import {g, videolowernavbarFunc, allVideos, allVideosClick, categoryVideos, categoryVideosClick, playlistVideos, playlistVideosClick} from "../videopage/videolowernavbar.js"

//Importing video data

import {cricbuzzChatterFunc, matchVideosFunc, newsRoundUpFunc, pressConferenceFunc, retroReelsFunc, cricbuzzLiveFunc, cricbuzzLiveHindiFunc} from "../videopage/videopagecategorydata.js"

//Function containing all the click functionality of lower navbar

let clickFunc = () => {

    allVideosClick();

    categoryVideosClick();

    playlistVideosClick();

}

//Function calling for upper navbar and its different functionalities

g('navbar').innerHTML = navbar();
g('footer').innerHTML = footer();
//Function calling for lower navbar and its different functionalities

g('lowernavbar').innerHTML = videolowernavbarFunc();

categoryVideos();

clickFunc();


//Method for shuffling an array

Array.prototype.shuffle = function(){

    let currentIndex = this.length,  randomIndex;

    // While there remain elements to shuffle.

    while (currentIndex != 0) {

    // Pick a remaining element.

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.

    [this[currentIndex], this[randomIndex]] = [
    this[randomIndex], this[currentIndex]];

    }

    return this;

}


//Storing all video data in different arrays, which are imported from videopagecategorydata.js

const cricbuzzChatterArr = cricbuzzChatterFunc().shuffle();

const matchVideosArr = matchVideosFunc().shuffle();

const newsRoundUpArr = newsRoundUpFunc().shuffle();

const pressConferenceArr = pressConferenceFunc().shuffle();

const retroReelsArr = retroReelsFunc();

const cricbuzzLiveArr = cricbuzzLiveFunc().shuffle();

const cricbuzzLiveHindiArr = cricbuzzLiveHindiFunc().shuffle();


//Function for creating Html elements

let c = (tag) => {

    return document.createElement(tag);
}


//Append Function

let Append = (data, q) => {

    let count = 0;
    
    data.forEach(({Image, Title})=> {
        
        if(!Image) {
            
            return;
            
        }

        if(count>3) {

            return;

        }

        let divC = c('div');

        divC.setAttribute('class', 'box');

        let Img = c('img');

        Img.src = Image;

        let Tit = c('p');

        Tit.innerText = Title;

        divC.append(Img, Tit);

        q.append(divC);   
        
        count++;

    })

}

let cricChatVideo = () => {

    let q = document.getElementById('chatvid');

    Append(cricbuzzChatterArr, q);

}

cricChatVideo();

let matchVideo = () => {

    let q = document.getElementById('matchvid');

    Append(matchVideosArr, q);

}

matchVideo();

let newsVideo = () => {

    let q = document.getElementById('newsvid');

    Append(newsRoundUpArr, q);

}

newsVideo();

let pressVideo = () => {

    let q = document.getElementById('pressvid');

    Append(pressConferenceArr, q);

}

pressVideo();

let retroVideo = () => {

    let q = document.getElementById('retrovid');

    Append(retroReelsArr, q);

}

retroVideo();


let liveVideo = () => {

    let q = document.getElementById('livevid');

    Append(cricbuzzLiveArr, q)

};

liveVideo();

let hindiVideo = () => {

    let q = document.getElementById('hindivid');

    Append(cricbuzzLiveHindiArr, q)

};

hindiVideo();


//Function for redirecting to user Sbscription Page
    
document.querySelectorAll('.box').forEach((el) => {

    el.addEventListener('click', (event) => {

        event.preventDefault();

        window.location.href = "https://www.cricbuzz.com/premium-subscription/user/select-plan/cricbuzz-video";

    })
})

