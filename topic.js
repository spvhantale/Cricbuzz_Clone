import {g, navbarlowers, allstories,allstoriesClick, cricbuzzplus,cricbuzzplusClick, newslower, newslowerClick, topicslower,topicslowerClick, spotlightlower, spotlightlowerClick} from "./navbarlowernews.js"
import navbar from "./navbar/mainnavbar.js"
document.querySelector("#navbar").innerHTML=navbar();
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
		'X-RapidAPI-Key': '412ee806edmsh2fac8ee2a346dabp1b7d50jsnb24cdfea69db',
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
		'X-RapidAPI-Key': '2eabeba429msh7fcbdf39ed18ec5p15a68cjsn68ae23da56c5',
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
