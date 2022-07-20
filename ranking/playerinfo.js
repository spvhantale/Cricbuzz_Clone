// const API_Key = "efbead02-64b5-47d5-af49-22db11a86890";


// import navbar from "../component/navbar.js";
import { append, getData } from "../fetch.js";

// console.log(navbar());

document.getElementById("navbar").innerHTML = navbar();
// let query = document.querySelector("#query").value;

const url = `https://api.cricapi.com/v1/players_info?apikey=efbead02-64b5-47d5-af49-22db11a86890&offset=0&id=16592242-ef26-45d9-bf23-fc090e90fbbe`;

let container = document.getElementById("container");

getData(url).then((res) => {
    console.log(res);
    append(res, container);
})

// enter(getData());