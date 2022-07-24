import {g, navbarlowers, allstories,allstoriesClick, cricbuzzplus,cricbuzzplusClick, newslower, newslowerClick, topicslower,topicslowerClick, spotlightlower, spotlightlowerClick} from "../news/navbarlowernews.js"
import {navbar,footer} from "../navbar/mainnavbar.js"
document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#footer").innerHTML=footer();
let clickFunc = () => {

        allstoriesClick();

        cricbuzzplusClick();

        newslowerClick();

        topicslowerClick();

        spotlightlowerClick();
        
    }

document.querySelector("#newsnavbar").innerHTML=navbarlowers();
clickFunc();
topicslower();
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',
		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
	}
};
    fetch('https://unofficial-cricbuzz.p.rapidapi.com/news/get-topics', options)
	.then(response => response.json())
	.then(response =>append(response.topics))
	.catch(err => console.error(err));
    const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
    fetch('https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index', option)
	.then(response => response.json())
	.then(response => append2(response.photoGalleryInfoList))
	.catch(err => console.error(err));
    let append=(array)=>{
    let allstories=document.querySelector("#allstories");
    array.forEach(element => {
          let h1=document.createElement("h2");
          h1.innerText=element.headline
           let p=document.createElement("p");
           p.innerText=element.desc;
           allstories.append(h1,p);
    });
}

let append2=(array)=>{
    
    let latestphots=document.querySelector("#latestphots");
    array.forEach(element => {
        if(element.photoGalleryInfo==undefined){
            return 
        }else{
            // console.log(element.story)
            let div=document.createElement("div");
            div.setAttribute("class","latestphotsview")
            let p=document.createElement("p");
            p.innerText=element.photoGalleryInfo.headline;
            let img=document.createElement("img");
            img.style.borderRadius="5px";
            img.src=`https://www.cricbuzz.com/a/img/v1/100x77/i1/c${element.photoGalleryInfo.imageId}/sri-lanka-v-pakistan-1st-test.jpg`;
            let hr=document.createElement("hr");
            div.append(img,p);
            latestphots.append(div,hr);
        }  
    });
}
