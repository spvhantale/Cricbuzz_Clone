const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f499dcdbc4msh3f8b3dc7b86e45ap11f1b6jsnfb2df5d5574b",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
  },
};

fetch(
  "https://unofficial-cricbuzz.p.rapidapi.com/stats/get-record-filters",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response.topStats))
  .catch((err) => console.error(err));

let append = (array) => {
  let schedule = document.querySelector("#player_box");
  array.forEach((element) => {
    if (element.statsData == undefined) {
      return;
    } else {
      let div = document.createElement("div");
      div.setAttribute("class", "scheduleview");
      let p = document.createElement("p");
      p.innerText = element.name;
      let p1 = document.createElement("p");
      p1.innerText = element.value;
      div.append(p1, p);
      schedule.append(div);
    }
  });
};
