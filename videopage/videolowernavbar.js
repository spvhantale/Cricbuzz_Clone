function videolowernavbarFunc() {

    return `<div id="videolowernavbar"><div id="allvid">All Videos</div>
    <div id="catvid">Categories</div>
    <div id="playvid">Playlists</div></div><hr id="vidhor">`
}


let g = (id) => {

    return document.getElementById(id);

}


const allVideos = () => {

        g('allvid').style.borderBottom= "4px solid #028062";

        g('allvid').style.color='#028062';

        g('allvid').style.fontWeight='bold';


}

const allVideosClick = () => {

    return `${g('allvid').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href ="./videopage/videopageall.html"

    })}`
}


const categoryVideos = () => {

    g('catvid').style.borderBottom= "4px solid #028062";

    g('catvid').style.color='#028062';

    g('catvid').style.fontWeight='bold';


}

const categoryVideosClick = () => {

    return `${g('catvid').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href ="../videopage/videopagecategory.html"

    })}`

}

const playlistVideos = () => {

    g('playvid').style.borderBottom= "4px solid #028062";

    g('playvid').style.color='#028062';

    g('playvid').style.fontWeight='bold';


}

const playlistVideosClick = () => {

    return `${g('playvid').addEventListener('click', (event)=> {

        event.preventDefault();

        window.location.href ="../videopage/videopageplaylist.html"

    })}`
    
}


 export  {g, videolowernavbarFunc, allVideos, allVideosClick, categoryVideos, categoryVideosClick, playlistVideos, playlistVideosClick};
