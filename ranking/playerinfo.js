// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b',
// 		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
// 	}
// };

// fetch('https://unofficial-cricbuzz.p.rapidapi.com/players/get-info?playerId=7755', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b",
//     "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
//   },
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
  },
};

fetch(
  "https://unofficial-cricbuzz.p.rapidapi.com/matches/get-schedules?matchType=international",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    append(response.scheduleAdWrapper);
    console.log(response);
  })
  .catch((err) => console.error(err));

let append = (array) => {
  let schedule = document.querySelector("#player_box");
  array.forEach((element) => {
    if (element.matchScheduleMap == undefined) {
      return;
    } else {
      let div = document.createElement("div");
      div.setAttribute("class", "scheduleview");
      let p = document.createElement("p");
      p.innerText = element.matchScheduleMap.date;
      let p1 = document.createElement("p");
      p1.innerText = element.matchScheduleMap.matchScheduleList[0].seriesName;
      div.append(p1, p);
      schedule.append(div);
    }
  });
};
