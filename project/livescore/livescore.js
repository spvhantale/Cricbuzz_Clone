
import {navbar,footer} from "../navbar/mainnavbar.js";
console.log(navbar);
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let g = (id) => {

    return document.getElementById(id);
    
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

      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7bff75051bmshce927f124e15e82p170432jsn30b390a7e73a',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
    
    fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res);
            append(res.typeMatches);
            // appends(res.typeMatches);
        })
        .catch(err => console.error(err));
    
    let append = (data) => {
       let lireup = document.querySelector("#lireup");
       data.forEach(ele => {
          let button1 = document.createElement("button");
          button1.innerText=ele.matchType;
          button1.setAttribute("id",`id${ele.matchType}`);
          lireup.append(button1);
          button1.addEventListener("click", (e) => {
           
            if(e.target.innerText=="International"){
                g('idInternational').style.backgroundColor = "#028062";
    
                g('idInternational').style.color = "white";
    
                g('idDomestic').style.backgroundColor = "#cfe0db";
    
               g('idDomestic').style.color = 'black';
    
            g('idLeague').style.backgroundColor = "#cfe0db";
    
            g('idLeague').style.color = 'black';
    
            g('idWomen').style.backgroundColor = "#cfe0db";
    
            g('idWomen').style.color = 'black';
            }
            else if(e.target.innerText=="League"){
                g('idLeague').style.backgroundColor = "#028062";
    
                g('idLeague').style.color = "white";
    
                g('idInternational').style.backgroundColor = "#cfe0db";
    
               g('idInternational').style.color = 'black';
    
            g('idDomestic').style.backgroundColor = "#cfe0db";
    
            g('idDomestic').style.color = 'black';
    
            g('idWomen').style.backgroundColor = "#cfe0db";
    
            g('idWomen').style.color = 'black';
            }
            else if(e.target.innerText=="Domestic"){
                g('idDomestic').style.backgroundColor = "#028062";
    
                g('idDomestic').style.color = "white";
    
                g('idInternational').style.backgroundColor = "#cfe0db";
    
               g('idInternational').style.color = 'black';
    
            g('idLeague').style.backgroundColor = "#cfe0db";
    
            g('idLeague').style.color = 'black';
    
            g('idWomen').style.backgroundColor = "#cfe0db";
    
            g('idWomen').style.color = 'black';
            }
            else if(e.target.innerText=="Women"){
                g('idWomen').style.backgroundColor = "#028062";
    
                g('idWomen').style.color = "white";
    
                g('idInternational').style.backgroundColor = "#cfe0db";
    
               g('idInternational').style.color = 'black';
    
            g('idLeague').style.backgroundColor = "#cfe0db";
    
            g('idLeague').style.color = 'black';
    
            g('idDomestic').style.backgroundColor = "#cfe0db";
    
            g('idDomestic').style.color = 'black';
            }
            console.log("hello");
            let container = document.querySelector("#container");
            container.innerHTML=null;
            console.log(ele.seriesMatches);
            let seriesdata = ele.seriesMatches;
            seriesdata.forEach(element => {
                if(element.seriesAdWrapper==undefined){
            console.log("Ye");
                return;
            }
            else{
                    let h2 = document.createElement("h2");
                h2.innerText=element.seriesAdWrapper.seriesName;
                container.append(h2);
                let matchdata = element.seriesAdWrapper.matches;
                matchdata.forEach(elem => {
                    let div1 = document.createElement("div");
                    let h3 = document.createElement("h3");
                    h3.innerText = `${elem.matchInfo.team1.teamName} vs ${elem.matchInfo.team2.teamName}, ${elem.matchInfo.matchDesc}`
                    let p1 = document.createElement("p");
                    if(elem.matchInfo.matchFormat==="TEST"){
                        let arr1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                    let startDate = new Date(+(elem.matchInfo.seriesStartDt));
                    let endDate = new Date(+(elem.matchInfo.endDate));
                    let printStartMonth = arr1[startDate.getMonth()];
                    let printStartDate = startDate.getDate();
                    let hour = startDate.getHours();
                    let minute = startDate.getMinutes();
                    let printEndMonth = arr1[endDate.getMonth()];
                    let printEndDate = endDate.getDate();
                    // let printStart = giveStartDate(startDate);
                    // let printEnd = giveEndDate(endDate);
                    // let printTime = giveTime(startDate);
                    p1.innerText= `${printStartMonth} ${printStartDate} - ${printEndMonth} ${printEndDate} . ${getLocalTime(elem.matchInfo.seriesStartDt)} at ${elem.matchInfo.venueInfo.city}, ${elem.matchInfo.venueInfo.ground}`;
                    }
                    else if(elem.matchInfo.matchFormat==="T20" || elem.matchInfo.matchFormat==="ODI"){
                        let arr1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                    let startDate = new Date(+(elem.matchInfo.seriesStartDt));
                    let endDate = new Date(+(elem.matchInfo.endDate));
                    let printStartMonth = arr1[startDate.getMonth()];
                    let printStartDate = startDate.getDate();
                    let hour = startDate.getHours();
                    let minute = startDate.getMinutes();
                    p1.innerText= `${printStartMonth} ${printStartDate} . ${getLocalTime(elem.matchInfo.seriesStartDt)} at ${elem.matchInfo.venueInfo.city}, ${elem.matchInfo.venueInfo.ground}`;
                    }
                    
                    let div2 = document.createElement("div");
                    div2.setAttribute("id","containerScore");
                    div2.innerHTML="<div></div>";
                    let divcontain = document.createElement("div");
                    let p2 = document.createElement("p");
                    let p3 = document.createElement("p");
                    if(elem.matchInfo.matchFormat==="TEST"){
                        if(elem.matchScore.team2Score.inngs2==undefined){
                            return ;
                        }
                        p2.innerText=`${elem.matchInfo.team1.teamSName}   ${elem.matchScore.team1Score.inngs1.runs} & ${elem.matchScore.team1Score.inngs2.runs}`;
                        
                        p3.innerText=`${elem.matchInfo.team2.teamSName}   ${elem.matchScore.team2Score.inngs1.runs} & ${elem.matchScore.team2Score.inngs2.runs}`;
                    }
                    else if(elem.matchInfo.matchFormat==="T20" || elem.matchInfo.matchFormat==="ODI"){
                        // if(elem.matchScore.team2Score.inngs2==undefined){
                        //     return ;
                        // }
                        p2.innerText=`${elem.matchInfo.team1.teamSName}   ${elem.matchScore.team1Score.inngs1.runs}`;
                        
                        p3.innerText=`${elem.matchInfo.team2.teamSName}   ${elem.matchScore.team2Score.inngs1.runs}`;
                    }
                    let p4 = document.createElement("p");
                    p4.innerText=elem.matchInfo.status;
                    p4.style.color="blue";
                    divcontain.append(p2,p3,p4);
                    div2.append(divcontain);
                    let div3 = document.createElement("div");
                    div3.innerHTML="<p>Live Score</p><div></div><p>Scorecard</p><div></div><p>Full Commentary</p><div></div><p>News</p>";
                    div1.append(h3,p1,div2,div3);
                    container.append(div1); 
                });
            }
            });
        }); 
    
        });
    }