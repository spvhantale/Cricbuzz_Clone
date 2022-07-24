    //Importing upper navbar

    import {navbar,footer} from "../navbar/mainnavbar.js";
    document.querySelector("#footer").innerHTML=footer();
    //Importing lower navbar for video page

    import {g, videolowernavbarFunc, allVideos, allVideosClick, categoryVideos, categoryVideosClick, playlistVideos, playlistVideosClick} from "../videopage/videolowernavbar.js"

    //Importing Video details from vodeodata.js

    import {headFunc, latestVideoFunc, indiaFunc, playlistFunc, indTourEngFunc, ashesMatchFunc, categoryFunc, bblMatchFunc} from "../videopage/videopagealldata.js";


    //Function containing all the click functionality of lower navbar

    let clickFunc = () => {

        allVideosClick();

        categoryVideosClick();

        playlistVideosClick();

    }

    //Function calling for upper navbar and its different functionalities

    g('navbar').innerHTML = navbar();

    //Function calling for lower navbar and its different functionalities

    g('lowernavbar').innerHTML = videolowernavbarFunc();

    allVideos();

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

    //Storing all video data in different arrays, which are imported from videopagealldata.js 
    
    const headVideoArr = headFunc();

    const latestVideoArr = latestVideoFunc().shuffle();

    const indiaVideoArr = indiaFunc().shuffle();

    const playlistVideoArr = playlistFunc().shuffle();

    const indTourEngVideoArr = indTourEngFunc().shuffle();

    const ashesMatchVideoArr = ashesMatchFunc().shuffle();

    const categoryVideoArr = categoryFunc().shuffle();

    const bblMatchVideoArr = bblMatchFunc().shuffle();

    //Function for creating Html elements

    let c = (tag) => {

        return document.createElement(tag);
    }


    //Append Function

    let Append1 = (data, q) => {

        data.forEach(({Image, Title}) => {

            if(!Image) {

                return;

            }

            let divC = c('div');

            divC.setAttribute('class', 'card');

            let Img = c('img');

            Img.src = Image;

            let Tit = c('p');

            Tit.innerText = Title;

            divC.append(Img, Tit);

            q.append(divC);

            

        })
    }

    let Append2 = (data, q) => {

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


    let Append3 = (data, q) => {

        let count = 0;
        
        data.forEach(({Image, Title})=> {
            
            if(!Image) {
                
                return;
                
            }

            if(count>9) {

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

    let headVideo = () => {

        let q = document.getElementById('headvid');

        Append1(headVideoArr, q);

    }

    headVideo();

    let latestVideo = () => {

        let q = document.getElementById('latestvid');

        Append2(latestVideoArr, q);

    }

    latestVideo()

    let indiaVideo = () => {

        let q = document.getElementById('indiavid');

        Append2(indiaVideoArr, q);

    }

    indiaVideo();

    let playlistVideo = () => {

        let q = document.getElementById('playlistvid');

        Append2(playlistVideoArr, q);

    }

    playlistVideo();

    let indtourengVideo = () => {

        let q = document.getElementById('indtourengvid');

        Append2(indTourEngVideoArr, q);

    }

    indtourengVideo();

    let ashesVideo = () => {

        let q = document.getElementById('ashesvid');

        Append2(ashesMatchVideoArr, q);

    }

    ashesVideo();

    let bblVideo = () => {

        let q = document.getElementById('bblvid');

        Append2(bblMatchVideoArr, q);

    }

    bblVideo();

    let categoryVideo = () => {

        let q = document.getElementById('categoryvid');

        Append3(categoryVideoArr, q);

    }

    categoryVideo();


    //Function for redirecting to user Sbscription Page
    
    document.querySelectorAll('.box').forEach((el) => {

        el.addEventListener('click', (event) => {

            event.preventDefault();
    
            window.location.href = "https://www.cricbuzz.com/premium-subscription/user/select-plan/cricbuzz-video";
    
        })
    })
    


