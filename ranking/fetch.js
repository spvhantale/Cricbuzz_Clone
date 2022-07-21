let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
  
    // data = data.sort((a, b) => {
    //     return a.price - b.price;
    // });
    return data.rank;
  };
  
  let append = (data, cont) => {
    data.forEach(({ faceImageId, country, name, points,rank }) => {
      let img = document.createElement("img");
      img.src = faceImageId;
      let t = document.createElement("h3");
      t.innerText = country;
      let p = document.createElement("h2");
      p.innerText = name;
        
      let p2 = document.createElement("h2");
      p2.innerText = points;
      let p3 = document.createElement("h2");
      p2.innerText = rank;
  
      let div = document.createElement("div");
      div.append(img, t, p,p2,p3);
  
      cont.append(div);
    });
  };
  
  export { getData, append };
  