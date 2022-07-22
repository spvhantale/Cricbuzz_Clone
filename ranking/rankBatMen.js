// import navbar from "../component/navbar.js";
// import { append, getarray } from "../fetch.js";

// console.log(navbar());
// api_key push="f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b"
// api_key imkannu="ff3cc66870msh53ff2e019d76247p1e2de4jsn7258e21d39cd"
// api_key swapnil="2eabeba429msh7fcbdf39ed18ec5p15a68cjsn68ae23da56c5"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
  },
};

let g = (id) => {
  return document.getElementById(id);
};

let query = "test";
document.querySelector("#test").addEventListener("click", test);
document.querySelector("#odi").addEventListener("click", odi);
document.querySelector("#t20").addEventListener("click", t20);
function test() {
  query = "test";
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=batsmen&formatType=${query}&isWomen=0`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      append(response.rank);
    })
    .catch((err) => console.error(err));

  g("batting").style.borderBottom = "4px solid #028062";

  g("bating").style.color = "#028062";

  g("bating").style.fontWeight = "bold";

  g("fut").style.borderBottom = "4px solid white";

  g("day").style.borderBottom = "4px solid white";

  g("team").style.borderBottom = "4px solid white";

  g("arch").style.borderBottom = "4px solid white";
}
function odi() {
  query = "odi";
  console.log(query);
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=batsmen&formatType=${query}&isWomen=0`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      append(response.rank);
    })
    .catch((err) => console.error(err));
}
function t20() {
  query = "t20";
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=batsmen&formatType=${query}&isWomen=0`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      append(response.rank);
    })
    .catch((err) => console.error(err));
}

fetch(
  `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=batsmen&formatType=${query}&isWomen=0`,
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

// const option = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "412ee806edmsh2fac8ee2a346dabp1b7d50jsnb24cdfea69db",
//     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
//   },
// };

// fetch("https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index", option)
//   .then((response) => response.json())
//   .then((response) => append2(response.photoGalleryInfoList))
//   .catch((err) => console.error(err));

// let append2 = (array) => {
//   let latestphotos = document.querySelector("#latestphotos");
//   array.forEach((element) => {
//     if (element.photoGalleryInfo == undefined) {
//       return;
//     } else {
//       console.log(element.story);
//       let div = document.createElement("div");
//       div.setAttribute("class", "latestphotsview");
//       let p = document.createElement("p");
//       p.innerText = element.photoGalleryInfo.headline;
//       let img = document.createElement("img");
//       img.src = `https://www.cricbuzz.com/a/img/v1/165x95/i1/c${element.photoGalleryInfo.imageId}/sri-lanka-v-pakistan-1st-test.jpg`;
//       div.append(img, p);
//       latestphotos.append(div);
//     }
//   });
// };
