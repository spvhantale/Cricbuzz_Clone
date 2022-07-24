// import navbar from "../component/navbar.js";
import {navbar,footer} from "../navbar/mainnavbar.js";
console.log(navbar);
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
// import { append, getarray } from "../fetch.js";
import {g, navbarlower, currentMatch,currentMatchClick, currentFutureMatch,currentFutureMatchClick, matchByDay, matchByDayClick, teamFunc,teamClick, archFunc, archClick} from "../schedule/navbarlower.js";
let clickFunc = () => {

  currentMatchClick();

  currentFutureMatchClick();

  matchByDayClick();

  teamClick();

  archClick();
  
}
g('navlowerschedule').innerHTML = navbarlower();
teamFunc();

clickFunc();
// console.log(navbar());
// api_key push="f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b"
// api_key imkannu="ff3cc66870msh53ff2e019d76247p1e2de4jsn7258e21d39cd"
// api_key swapnil="2eabeba429msh7fcbdf39ed18ec5p15a68cjsn68ae23da56c5"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
  },
};

let query = "test";
document.querySelector("#test").addEventListener("click", test);
document.querySelector("#odi").addEventListener("click", odi);
document.querySelector("#t20").addEventListener("click", t20);
document.querySelector("#men").style.backgroundColor = "#009270";
document.querySelector("#men").style.color = "white";
document.querySelector("#men").style.fontWeight = "bold";
document.querySelector("#allrounder").style.fontWeight = "bold";
document.querySelector("#allrounder").style.backgroundColor = "#009270";
document.querySelector("#test").style.color = "white";
document.querySelector("#test").style.fontWeight = "bold";
document.querySelector("#test").style.backgroundColor = "#009270";
document.querySelector("#odi").style.color = "black";
document.querySelector("#odi").style.backgroundColor = "#CFE0DB";
document.querySelector("#t20").style.color = "black";
document.querySelector("#t20").style.backgroundColor = "#CFE0DB";
document.querySelector("#batting").style.backgroundColor = "#CFE0DB";
document.querySelector("#bowling").style.backgroundColor = "#CFE0DB";
document.querySelector("#team").style.backgroundColor = "#CFE0DB";
function test() {
  query = "test";

  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=allrounders&formatType=${query}&isWomen=0`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      append(response.rank);
    })
    .catch((err) => console.error(err));

  document.querySelector("#test").style.color = "white";
  document.querySelector("#test").style.fontWeight = "bold";
  document.querySelector("#test").style.backgroundColor = "#009270";
  document.querySelector("#odi").style.color = "black";
  document.querySelector("#odi").style.backgroundColor = "#CFE0DB";
  document.querySelector("#t20").style.color = "black";
  document.querySelector("#t20").style.backgroundColor = "#CFE0DB";
}
function odi() {
  query = "odi";
  console.log(query);
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=allrounders&formatType=${query}&isWomen=0`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      append(response.rank);
    })
    .catch((err) => console.error(err));

  document.querySelector("#odi").style.color = "white";
  document.querySelector("#odi").style.fontWeight = "bold";
  document.querySelector("#odi").style.backgroundColor = "#009270";
  document.querySelector("#test").style.color = "black";
  document.querySelector("#test").style.backgroundColor = "#CFE0DB";
  document.querySelector("#t20").style.color = "black";
  document.querySelector("#t20").style.backgroundColor = "#CFE0DB";
}
function t20() {
  query = "t20";
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=allrounders&formatType=${query}&isWomen=0`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      append(response.rank);
    })
    .catch((err) => console.error(err));

  document.querySelector("#t20").style.color = "white";
  document.querySelector("#t20").style.fontWeight = "bold";
  document.querySelector("#t20").style.backgroundColor = "#009270";
  document.querySelector("#odi").style.color = "black";
  document.querySelector("#odi").style.backgroundColor = "#CFE0DB";
  document.querySelector("#test").style.color = "black";
  document.querySelector("#test").style.backgroundColor = "#CFE0DB";
}

fetch(
  `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=allrounders&formatType=${query}&isWomen=0`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    append(response.rank);
  })
  .catch((err) => console.error(err));
let append = (array) => {
  let batsmenRanking = document.querySelector("#list_box");
  batsmenRanking.innerHTML = null;
  array.forEach((element) => {
    if (element.rank == undefined) {
      return;
    } else {
      let box = document.createElement("div");
      box.className = "box";

      let img = document.createElement("img");
      img.src = `https://www.cricbuzz.com/a/img/v1/50x50/i1/c${element.faceImageId}/joe-root.jpg`;
      let p = document.createElement("h3");
      p.innerText = element.rank;
      let p1 = document.createElement("h3");
      p1.innerText = element.points;
      let p2 = document.createElement("h4");
      p2.innerText = element.country;
      let p3 = document.createElement("h4");
      p3.innerText = element.name;
      box.append(p, img, p3, p2, p1);
      batsmenRanking.append(box);
      console.log(box);
    }
  });
};

// side latest photos view:-

const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c00e01368msh2336d66b7012ca5p1d988fjsn5d636d7a776f",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
};

fetch("https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index", option)
  .then((response) => response.json())
  .then((response) => append2(response.photoGalleryInfoList))
  .catch((err) => console.error(err));

let append2 = (array) => {
  let latestphotos = document.querySelector("#latestphotos");
  array.forEach((element) => {
    if (element.photoGalleryInfo == undefined) {
      return;
    } else {
      console.log(element.story);
      let div = document.createElement("div");
      div.setAttribute("class", "latestphotosview");
      let p = document.createElement("p");
      p.innerText = element.photoGalleryInfo.headline;
      let img = document.createElement("img");
      img.src = `https://www.cricbuzz.com/a/img/v1/165x95/i1/c${element.photoGalleryInfo.imageId}/sri-lanka-v-pakistan-1st-test.jpg`;
      div.append(img, p);

      latestphotos.append(div);
    }
  });
};
