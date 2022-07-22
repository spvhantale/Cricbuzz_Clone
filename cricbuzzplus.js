import {g, navbarlowers, allstories,allstoriesClick, cricbuzzplus,cricbuzzplusClick, newslower, newslowerClick, topicslower,topicslowerClick, spotlightlower, spotlightlowerClick} from "./navbarlowernews.js"
    
let clickFunc = () => {

        allstoriesClick();

        cricbuzzplusClick();

        newslowerClick();

        topicslowerClick();

        spotlightlowerClick();
        
    }

document.querySelector("#newsnavbar").innerHTML=navbarlowers();
clickFunc();
cricbuzzplus()

    const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8cfec7ed71msh5171ae94d556119p1514a6jsnec75adf16030',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};
    fetch('https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index', option)
	.then(response => response.json())
	.then(response => append2(response.photoGalleryInfoList))
	.catch(err => console.error(err));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '412ee806edmsh2fac8ee2a346dabp1b7d50jsnb24cdfea69db',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
    
    fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics/349', options)
        .then(response => response.json())
        .then(response => append(response.storyList))
        .catch(err => console.error(err));
    let append=(array)=>{
    let allstories=document.querySelector("#allstories");
    array.forEach(element => {
        if(element.story==undefined){
            return 
        }else{
            // console.log(element.story)
            let div=document.createElement("div");
            div.addEventListener("click",function(){
                // console.log("Swapnil")
                localStorage.setItem("newspage",JSON.stringify(element));
                window.location.href="newspage.html";
            })
            let div1=document.createElement("div");
            console.log(element);
            div.setAttribute("class","newsallstories")
            let p=document.createElement("p");
            p.innerText=`${element.story.storyType}.${element.story.context}`;
            p.style.color="gray";
            p.style.marginTop="-1px"
            p.style.textTransform="uppercase";
            let img=document.createElement("img");
            img.style.borderRadius="5px";
            // img.style.height="150px";
            img.src=`https://www.cricbuzz.com/a/img/v1/205x152/i1/c${element.story.coverImage.id}/dunkley-cracked-a-quick-fire-f.jpg`
            let h2=document.createElement("h3");
            h2.innerText=element.story.hline;
            let p2=document.createElement("p");
            p2.innerText=element.story.intro;
            let hr=document.createElement("hr");
            div1.append(p,h2,p2);
            div.append(img,div1);
            allstories.append(div,hr);
        }  
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

