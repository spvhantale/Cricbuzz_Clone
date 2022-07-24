    //Importing upper navbar

    import {navbar,footer} from "../navbar/mainnavbar.js"
document.querySelector("#footer").innerHTML=footer();
    //Importing functions from navbarlower.js

    import {g, navbarlower, currentMatch,currentMatchClick, currentFutureMatch,currentFutureMatchClick, matchByDay, matchByDayClick, teamFunc,teamClick, archFunc, archClick} from "../schedule/navbarlower.js";


    //Function containing all the click functionality of navbarlower

    let clickFunc = () => {

        currentMatchClick();

        currentFutureMatchClick();

        matchByDayClick();

        teamClick();

        archClick();
        
    }


    //Function for making a number into two digit

    let twoDigit = (num) => {

        let str = num.toString();

        if(str.length === 1) {

            str = '0'+str;

            return str;

        } else {

            return str;

        }

    }


    //Function for getting Local time

    let getLocalTime = (num) => {

        let dateTime = new Date(+num);

        let hour = dateTime.getHours();

        let minutes = dateTime.getMinutes();

        if((hour*60+minutes)>720) {

            minutes = twoDigit(minutes);

            return `${hour-12}:${minutes} PM`

        } else if((hour*60+minutes)===720) {

            minutes = twoDigit(minutes);

            hour = twoDigit(hour);

            return `${hour}:${minutes} PM`

        } else {

            minutes = twoDigit(minutes);

            return `${hour}:${minutes} AM`

        }   

    }


    //Function for getting GMT time

    let  getGMTTime = (num) => {

        let dateTime = new Date(+num);

        let hour = dateTime.getUTCHours();

        let minutes = dateTime.getUTCMinutes();

        if((hour*60+minutes)>720) {

            minutes = twoDigit(minutes);

            hour = hour-12;

            hour = twoDigit(hour);

            return `${hour}:${minutes} PM GMT`

        } else if((hour*60+minutes)===720) {

            minutes = twoDigit(minutes);

            hour = twoDigit(hour);

            return `${hour}:${minutes} PM GMT`


        } else {

            minutes = twoDigit(minutes);

            hour = twoDigit(hour);

            return `${hour}:${minutes} AM GMT`

        }

    }
    

    //Function for Evaluating the local time of the venue

    let getVenueTime = (str,num) => {

        let localMinutes = (+(str[1]+str[2]))*60+(+(str[4]+str[5]));

        let dateTime = new Date(+num);

        let hour = dateTime.getUTCHours();

        let minutes = dateTime.getUTCMinutes();

        let totalGMTMinutes = hour*60+minutes;

        if(str[0]==='+') {

            let netMinutes = totalGMTMinutes + localMinutes;

            hour = Math.trunc(netMinutes/60);

            minutes = netMinutes%60;

            if(netMinutes>720) {

                minutes = twoDigit(minutes);

                hour = hour-12;

                hour = twoDigit(hour);

                return `${hour}:${minutes} PM LOCAL`;

            } else {

                minutes = twoDigit(minutes);

                hour = twoDigit(hour);

                return `${hour}:${minutes} AM LOCAL`;
            }

        } else {

            let netMinutes = totalGMTMinutes - localMinutes;

            hour = Math.trunc(netMinutes/60);

            minutes = netMinutes%60;

            if(netMinutes>720) {

                minutes = twoDigit(minutes);

                hour = hour-12;

                hour = twoDigit(hour);

                return `${hour}:${minutes} PM LOCAL`;

            } else if(netMinutes === 720) {

                minutes = twoDigit(minutes);

                hour = twoDigit(hour);

                return `${hour}:${minutes} PM LOCAL`;

            } else {

                minutes = twoDigit(minutes);

                hour = twoDigit(hour);

                return `${hour}:${minutes} AM LOCAL`;
            }

        }

    }


    //Function for creating Html elements

    let c = (tag) => {

        return document.createElement(tag);
    }

    
    //Function calling for upper navbar and its different functionalities

    g('navbar').innerHTML = navbar();


    //Function calling for lower navbar and its different functionalities

    g('navlowerschedule').innerHTML = navbarlower();

    matchByDay();

    clickFunc();

    

    //Network Request with fetch
    //Default for the schedule page - International

    window.addEventListener('load', async (event) => {

        const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules'

        let response = await fetch(url, {

            method: "GET",

            params: {matchType: 'international'},

            headers: {

                'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',

                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'

            }

        });

        let data = (await response.json()).scheduleAdWrapper;

        console.log(data);

        appendFunc(data);

    }); 



    //Function for appending different elements

    let appendFunc = (data) => {

        g('container').innerHTML = "";

        for(let el of data) {

            if(el.matchScheduleMap === undefined) {

                continue;

            }

            let Date = el.matchScheduleMap.date.toUpperCase();

            let divBox = c('div');

            divBox.setAttribute('class','divBox');

            let divDate = c('div');

            divDate.innerText = Date;

            divDate.setAttribute('class', 'divDate')

            divBox.append(divDate);

            for(let i=0; i<el.matchScheduleMap.matchScheduleList.length; i++) {

                let Num = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].startDate;

                let TimeZone = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].venueInfo.timezone;

                let SeriesName = el.matchScheduleMap.matchScheduleList[i].seriesName;
                
                let Team1 = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].team1.teamName;
                
                let Team2 = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].team2.teamName
                
                let MatchType = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].matchDesc;

                let GroundName = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].venueInfo.ground;

                let City = el.matchScheduleMap.matchScheduleList[i].matchInfo[0].venueInfo.city;

                let LocalTime = getLocalTime(Num);

                let GMTTime = getGMTTime(Num);

                let VenueTime = getVenueTime(TimeZone, Num)
            
                let divSeries = c('div');

                divSeries.setAttribute('class', 'divSeries');

                let firstBox = c('div');

                firstBox.setAttribute('class', 'firstBox');

                let pSeries = c('p');

                pSeries.innerText = SeriesName;

                pSeries.setAttribute('class', 'pSeries');

                firstBox.append(pSeries);

                let middleBox = c('div');

                middleBox.setAttribute('class', 'middleBox');

                let pMatch = c('p');

                pMatch.innerText = `${Team1} vs ${Team2}, ${MatchType}`;

                pMatch.setAttribute('class', 'pMatch');

                let pVenue = c('p');

                pVenue.innerText = `${GroundName}, ${City}`

                pVenue.setAttribute('class', 'pVenue');

                middleBox.append(pMatch, pVenue);

                let timeBox = c('div');

                timeBox.setAttribute('class', 'timeBox');

                let pLocal = c('p');

                pLocal.innerText = `${LocalTime}`

                pLocal.setAttribute('class', 'pLocal');

                let pGMTVenue = c('p');

                pGMTVenue.innerText = `${GMTTime} / ${VenueTime}`;

                pGMTVenue.setAttribute('class', 'pGMTVenue');

                timeBox.append(pLocal, pGMTVenue)

                divSeries.append(firstBox, middleBox, timeBox);

                divBox.append(divSeries);

                if(el.matchScheduleMap.matchScheduleList.length>1 && i!==el.matchScheduleMap.matchScheduleList.length-1) {

                    let Hr = c('HR');

                    Hr.setAttribute('class', 'Hr');

                    divBox.append(Hr);

                }       
               
            }

            g('container').append(divBox);

        }
            
    }



    //domestic

    g('domestic').addEventListener('click', async (event)=> {

        event.preventDefault();

        g('domestic').style.backgroundColor = "#028062";

        g('domestic').style.color = "white";

        g('international').style.backgroundColor = "#cfe0db";

        g('international').style.color = 'black';

        g('t20').style.backgroundColor = "#cfe0db";

        g('t20').style.color = 'black';

        g('women').style.backgroundColor = "#cfe0db";

        g('women').style.color = 'black';

        const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=domestic'

        let response = await fetch(url, {

            method: "GET",

            params: {matchType: 'domestic'},

            headers: {

                'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',

                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'

            }

        });

        let data = (await response.json()).scheduleAdWrapper;

        appendFunc(data);

    });




    //t20

    g('t20').addEventListener('click', async (event)=> {

        event.preventDefault();

        g('t20').style.backgroundColor = "#028062";

        g('t20').style.color = "white";

        g('international').style.backgroundColor = "#cfe0db";

        g('international').style.color = 'black';

        g('domestic').style.backgroundColor = "#cfe0db";

        g('domestic').style.color = 'black';

        g('women').style.backgroundColor = "#cfe0db";

        g('women').style.color = 'black';

        const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=league'

        let response = await fetch(url, {

            method: "GET",

            params: {matchType: 'league'},

            headers: {

                'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',

                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'

            }

        });

        let data = (await response.json()).scheduleAdWrapper;

        appendFunc(data);

        
    });

    

    //Women

    g('women').addEventListener('click', async (event)=> {

        event.preventDefault();

        g('women').style.backgroundColor = "#028062";

        g('women').style.color = "white";

        g('international').style.backgroundColor = "#cfe0db";

        g('international').style.color = 'black';

        g('t20').style.backgroundColor = "#cfe0db";

        g('t20').style.color = 'black';

        g('domestic').style.backgroundColor = "#cfe0db";

        g('domestic').style.color = 'black';

        const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=women'

        let response = await fetch(url, {

            method: "GET",

            params: {matchType: 'women'},

            headers: {

                'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',

                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'

            }

        });

        let data = (await response.json()).scheduleAdWrapper;

        appendFunc(data);
    });


    

    //International

    g('international').addEventListener('click', async (event)=> {

        event.preventDefault();

        g('international').style.backgroundColor = "#028062";

        g('international').style.color = "white";

        g('women').style.backgroundColor = "#cfe0db";

        g('women').style.color = 'black';

        g('t20').style.backgroundColor = "#cfe0db";

        g('t20').style.color = 'black';

        g('domestic').style.backgroundColor = "#cfe0db";

        g('domestic').style.color = 'black';

        const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=international'

        let response = await fetch(url, {

            method: "GET",

            params: {matchType: 'international'},

            headers: {

                'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',

                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'

            }

        });

        let data = (await response.json()).scheduleAdWrapper;

        appendFunc(data);

    });
