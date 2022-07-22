function navbarlowers() {

    return `<div id="navbarlowers"><div id="allst">All Stories</div>
    <div id="cricbuzzplus">Cricbuzz Plus</div>
    <div id="newslower">News</div>
    <div id="topicslower">Topics</div>
    <div id="spotlightlower">Spotlight</div>
    </div><hr id="hor">`
}


let g = (id) => {

    return document.getElementById(id);

}


let allstories = () => {

        g('allst').style.borderBottom= "4px solid #028062";

        g('allst').style.color='#028062';

        g('allst').style.fontWeight='bold';

        g('cricbuzzplus').style.borderBottom= "4px solid white";

        g('newslower').style.borderBottom= "4px solid white";

        g('topicslower').style.borderBottom= "4px solid white";

        g('spotlightlower').style.borderBottom= "4px solid white";

}

let allstoriesClick = () => {

    return `${g('allst').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

let cricbuzzplus = () => {

        g('cricbuzzplus').style.borderBottom= "4px solid #028062";

        g('cricbuzzplus').style.color='#028062';

        g('cricbuzzplus').style.fontWeight='bold';

        g('newslower').style.borderBottom= "4px solid white";

        g('topicslower').style.borderBottom= "4px solid white";

        g('spotlightlower').style.borderBottom= "4px solid white";

        g('allst').style.borderBottom= "4px solid white";

}



let cricbuzzplusClick = () => {

    return `${g('cricbuzzplus').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

let newslower = () => {

    g('newslower').style.borderBottom= "4px solid #028062";

    g('newslower').style.color='#028062';

    g('newslower').style.fontWeight='bold';

    g('topicslower').style.borderBottom= "4px solid white";

    g('allst').style.borderBottom= "4px solid white";

    g('cricbuzzplus').style.borderBottom= "4px solid white";

    g('spotlightlower').style.borderBottom= "4px solid white";


}

let newslowerClick = () => {

    return `${g('newslower').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href ="./schedule.html"

    })}`
}

let topicslower = () => {

        g('topicslower').style.borderBottom= "4px solid #028062";

        g('topicslower').style.color='#028062';

        g('topicslower').style.fontWeight='bold';

        g('allst').style.borderBottom= "4px solid white";

        g('cricbuzzplus').style.borderBottom= "4px solid white";

        g('newslower').style.borderBottom= "4px solid white";

        g('spotlightlower').style.borderBottom= "4px solid white";

}

let topicslowerClick = () => {

    return `${g('topicslower').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

let spotlightlower = ()=> {

        g('spotlightlower').style.borderBottom= "4px solid #028062";

        g('spotlightlower').style.color='#028062';

        g('spotlightlower').style.fontWeight='bold';

        g('allst').style.borderBottom= "4px solid white";

        g('cricbuzzplus').style.borderBottom= "4px solid white";

        g('newslower').style.borderBottom= "4px solid white";

        g('topicslower').style.borderBottom= "4px solid white";


}

let spotlightlowerClick = () => {

    return `${g('spotlightlower').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href =""

    })}`
}

 export  {g, navbarlowers, allstories,allstoriesClick, cricbuzzplus,cricbuzzplusClick, newslower, newslowerClick, topicslower,topicslowerClick, spotlightlower, spotlightlowerClick};
