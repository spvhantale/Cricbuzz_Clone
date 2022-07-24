
//Importing upper navbar

import {navbar,footer} from "../navbar/mainnavbar.js";


//Importing lower navbar for video page

import {g, videolowernavbarFunc, allVideos, allVideosClick, categoryVideos, categoryVideosClick, playlistVideos, playlistVideosClick} from "../videopage/videolowernavbar.js"

//Importing video data 

import {indTourWiFunc, indTourEngFunc, cricbuzzChatterFunc, womenWorldFunc, indVsSriFunc, BuzzFunc} from "../videopage/videopageplaylistdata.js"


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

playlistVideos();

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

const indTourWiArr = indTourWiFunc().shuffle();

const indTourEngArr = indTourEngFunc().shuffle();

const cricbuzzChatterArr = cricbuzzChatterFunc().shuffle();

const womenWorldArr = womenWorldFunc().shuffle();

const indVsSriArr = indVsSriFunc();

const BuzzArr = BuzzFunc().shuffle();


//Function for creating Html elements

let c = (tag) => {

    return document.createElement(tag);
}


//Append Function

let Append = (data, q) => {

    let count = 0;
    
    data.forEach(({image, title})=> {
        
        if(!Image) {
            
            return;
            
        }

        if(count>3) {

            return;

        }

        let divC = c('div');

        divC.setAttribute('class', 'box');

        let Img = c('img');

        Img.src = image;

        let Tit = c('p');

        Tit.innerText = title;

        divC.append(Img, Tit);

        q.append(divC);   
        
        count++;

    })

}


let indTourWi = () => {

    let q = document.getElementById('idindTourWi');

    Append(indTourWiArr, q);

}

indTourWi();

let indTourEng = () => {

    let q = document.getElementById('idindTourEng');

    Append(indTourEngArr, q);

}

indTourEng();

let cricbuzzChatter = () => {

    let q = document.getElementById('idcricbuzzChatter');

    Append(cricbuzzChatterArr, q);

}

cricbuzzChatter();

let womenWorld = () => {

    let q = document.getElementById('idwomenWorld');

    Append(womenWorldArr, q);

}

womenWorld();

let indVsSri = () => {

    let q = document.getElementById('idindVsSri');

    Append(indVsSriArr, q);

}

indVsSri();

let Buzz = () => {

    let q = document.getElementById('idBuzz');

    Append(BuzzArr, q);

}

Buzz();



//Function for redirecting to user Subscription Page
    
document.querySelectorAll('.box').forEach((el) => {

    el.addEventListener('click', (event) => {

        event.preventDefault();

        window.location.href = "https://www.cricbuzz.com/premium-subscription/user/select-plan/cricbuzz-video";

    })
})

