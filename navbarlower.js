function navbarlower() {

    return `<div id="navbarlower"><div id="curr">Current Matches</div>
    <div id="fut">Current & Future Matches</div>
    <div id="day">Matches By Day</div>
    <div id="team">Teams</div>
    <div id="arch">Series Archieve</div></div><hr id="hor">`
}


let g = (id) => {

    return document.getElementById(id);

}


let currentMatch = () => {

        g('curr').style.borderBottom= "4px solid #028062";

        g('curr').style.color='#028062';

        g('curr').style.fontWeight='bold';

        g('fut').style.borderBottom= "4px solid white";

        g('day').style.borderBottom= "4px solid white";

        g('team').style.borderBottom= "4px solid white";

        g('arch').style.borderBottom= "4px solid white";

}

let currentMatchClick = () => {

    return `${g('curr').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

let currentFutureMatch = () => {

        g('fut').style.borderBottom= "4px solid #028062";

        g('fut').style.color='#028062';

        g('fut').style.fontWeight='bold';

        g('curr').style.borderBottom= "4px solid white";

        g('day').style.borderBottom= "4px solid white";

        g('team').style.borderBottom= "4px solid white";

        g('arch').style.borderBottom= "4px solid white";

}



let currentFutureMatchClick = () => {

    return `${g('fut').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

let matchByDay = () => {

    g('day').style.borderBottom= "4px solid #028062";

    g('day').style.color='#028062';

    g('day').style.fontWeight='bold';

    g('fut').style.borderBottom= "4px solid white";

    g('curr').style.borderBottom= "4px solid white";

    g('team').style.borderBottom= "4px solid white";

    g('arch').style.borderBottom= "4px solid white";


}

let matchByDayClick = () => {

    return `${g('day').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href ="./schedule.html"

    })}`
}

let teamFunc = () => {

        g('team').style.borderBottom= "4px solid #028062";

        g('team').style.color='#028062';

        g('team').style.fontWeight='bold';

        g('fut').style.borderBottom= "4px solid white";

        g('day').style.borderBottom= "4px solid white";

        g('curr').style.borderBottom= "4px solid white";

        g('arch').style.borderBottom= "4px solid white";

}

let teamClick = () => {

    return `${g('team').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

let archFunc = ()=> {

        g('arch').style.borderBottom= "4px solid #028062";

        g('arch').style.color='#028062';

        g('arch').style.fontWeight='bold';

        g('fut').style.borderBottom= "4px solid white";

        g('day').style.borderBottom= "4px solid white";

        g('team').style.borderBottom= "4px solid white";

        g('curr').style.borderBottom= "4px solid white";


}

let archClick = () => {

    return `${g('arch').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

 export  {g, navbarlower, currentMatch,currentMatchClick, currentFutureMatch,currentFutureMatchClick, matchByDay, matchByDayClick, teamFunc,teamClick, archFunc, archClick};
