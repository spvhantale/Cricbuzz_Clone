
    //Function for making a number two digit

    let twoDigit = (num) => {

        let str = num.toString();

        if(str.length === 1) {

            str = '0'+str;

            return str;

        } else {

            return str;

        }

    }


    //Function for getting GMT time

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



    //Network Request with fetch
    //Default for the schedule page - International

    window.addEventListener('load', async (event) => {

        const url = 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules'

        let response = await fetch(url, {

            method: "GET",

            params: {matchType: 'international'},

            headers: {

                'X-RapidAPI-Key': '302ee37d7amshdab8add06216f97p1651a2jsndb6b79c36b02',

                'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'

            }

        });

        let data = (await response.json()).scheduleAdWrapper;

        console.log('data:', data[2])

        appendFunc(data);

    }); 


    //Function for appending different elements

    let appendFunc = (data) => {

        document.getElementById('container').innerHTML = "";

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
            
                // console.log([Date, TimeZone, Num,  SeriesName, Team1, Team2, MatchType, GroundName, City, LocalTime, GMTTime, VenueTime]);

                let divSeries = c('div');

                let pSeries = c('p');

                pSeries.innerText = SeriesName;

                pSeries.setAttribute('class', 'pSeries');

                let pMatch = c('p');

                pMatch.innerText = `${Team1} vs ${Team2}, ${MatchType}`;

                pMatch.setAttribute('class', 'pMatch');

                let pVenue = c('p');

                pVenue.innerText = `${GroundName}, ${City}`

                pVenue.setAttribute('class', 'pVenue');

                let pLocal = c('p');

                pLocal.innerText = `${LocalTime}`

                pLocal.setAttribute('class', 'pLocal');

                let pGMTVenue = c('p');

                pGMTVenue.innerText = `${GMTTime} / ${VenueTime}`;

                pGMTVenue.setAttribute('class', 'pGMTVenue');

                divSeries.append(pSeries, pMatch, pVenue, pLocal, pGMTVenue);

                divBox.append(divSeries);
               
            }

            document.getElementById('container').append(divBox);

        }
            
    }


    //domestic

    document.getElementById('domestic').addEventListener('click', async (event)=> {

        event.preventDefault();

        document.getElementById('domestic').style.backgroundColor = "#028062";

        document.getElementById('domestic').style.color = "white";

        document.getElementById('international').style.backgroundColor = "#cfe0db";

        document.getElementById('international').style.color = 'black';

        document.getElementById('t20').style.backgroundColor = "#cfe0db";

        document.getElementById('t20').style.color = 'black';

        document.getElementById('women').style.backgroundColor = "#cfe0db";

        document.getElementById('women').style.color = 'black';
    });



    //t20

    document.getElementById('t20').addEventListener('click', async (event)=> {

        event.preventDefault();

        document.getElementById('t20').style.backgroundColor = "#028062";

        document.getElementById('t20').style.color = "white";

        document.getElementById('international').style.backgroundColor = "#cfe0db";

        document.getElementById('international').style.color = 'black';

        document.getElementById('domestic').style.backgroundColor = "#cfe0db";

        document.getElementById('domestic').style.color = 'black';

        document.getElementById('women').style.backgroundColor = "#cfe0db";

        document.getElementById('women').style.color = 'black';

        
    });


    //Women

    document.getElementById('women').addEventListener('click', async (event)=> {

        event.preventDefault();

        document.getElementById('women').style.backgroundColor = "#028062";

        document.getElementById('women').style.color = "white";

        document.getElementById('international').style.backgroundColor = "#cfe0db";

        document.getElementById('international').style.color = 'black';

        document.getElementById('t20').style.backgroundColor = "#cfe0db";

        document.getElementById('t20').style.color = 'black';

        document.getElementById('domestic').style.backgroundColor = "#cfe0db";

        document.getElementById('domestic').style.color = 'black';
    });
    

    //International

    document.getElementById('international').addEventListener('click', async (event)=> {

        event.preventDefault();

        window.location.reload();

    });


