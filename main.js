// CAROUSEL BEGINS
let sources = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg",
    "img/15.jpg",
    "img/16.jpg",
    "img/17.jpg",
    "img/20.jpg",
    "img/21.jpg",
    "img/22.jpg",
    "img/23.jpg",
    "img/24.jpg",
    "img/25.jpg",
    "img/26.jpg",
    "img/27.jpg",
    "img/28.jpg",
    "img/29.jpg",
    "img/30.jpg",
    "img/vierkant.jpg",
    "img/sekula.jpg",
    "img/rozendaal.gif"
];
function assign() {
    img0.src = sources[0];
    img1.src = sources[1];
    img2.src = sources[2];
}
let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
assign();
img0.addEventListener("click", () => {
    carouselFwd(sources);
});
img1.addEventListener("click", () => {
    carouselFwd(sources);
});
img2.addEventListener("click", () => {
    carouselFwd(sources);
});
function carouselFwd(arr) {
    arr.push(arr.shift());
    assign();
}
// CAROUSEL ENDS

// START BODY STUFF
let whitman = document.getElementById("whitman");
// END BODY STUFF


// VERSES BEGIN
let verses, titles, struct;
function loadDataset(requestURL) {
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    let res = request.response;
    verses = res.verses;
    titles = res.titles;
    titles = titles.map(a => a.toUpperCase());
    struct = fyShuffle(formStructure());
    // insert layout function here
    setLayout();
  }
}
function chooseRandom(min,max) {
  // choose a random number, input min and max
  return Math.floor(Math.random() * (max - min) + min);
}
function arrayPicker(arr) {
  return arr[chooseRandom(0,arr.length)]
}
function fyShuffle(arr) {
  // fisher-yates shuffle implementation
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  let newArr = new Array;
  for (let i = arr.length; i > 0; i --) {
    let k = chooseRandom(0,arr.length);
    newArr.push(arr[k])
    arr = [...arr.slice(0,k),...arr.slice(k+1)];
  }
  return newArr
}
function formStructure() {
  let res = [];
  // find 3 verses
  for (i = 0; i < 3; i++) {
    res.push(arrayPicker(verses));
  }
  let count = 3;
  for (i = 0; i < 6; i++) {
    if (count === 8) {
      res.push(arrayPicker(sources))
      break;
    }
    if (count === 9) {
      break;
    }
    switch (chooseRandom(0,2)) {
      case 0:
        res.push(arrayPicker(sources))
        count++;
        continue;
      case 1:
        res.push(arrayPicker(titles));
        count = count + 2;
        continue;
    }
  }
  return res
}
function setLayout() {
  for (i = 0; i < struct.length; i++) {
    let el = struct[i];
    let p = document.createElement("p");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    if (el.indexOf(".jpg") != -1) {
      img.className = "whitman" + String(i);
      img.className += " boxImg";
      img.src = el;
      whitman.appendChild(img);
    } else if (el === el.toUpperCase()) {
      h1.className = "whitman" + String(i);
      h1.textContent = el.toLowerCase();
      whitman.appendChild(h1);
    }
    else {
      p.textContent = el;
      p.className = "whitman" + String(i);
      whitman.appendChild(p);
    }
  }
}
function whitmanGen() {
  while (whitman.firstChild) {
    whitman.removeChild(whitman.firstChild);
  };
  loadDataset("txt/whitman.json");
}
loadDataset("txt/whitman.json");
// VERSES END

// COLLAPSE START

function toggler(group, toggle) {
  let isHid = group.style.cssText;
  if (isHid === "display: block;") {
    group.style.cssText = "display: none;"
    toggle.style.cssText = "transform: rotate(0deg);"
  } else {
    group.style.cssText = "display: block;"
    toggle.style.cssText = "transform: rotate(90deg);"
  }
}

let collapseTog0 = document.getElementById("collapseTog0");
let collapseHed0 = document.getElementById("collapseHed0");
let collapseGroup0 = document.getElementById("collapseGroup0");
collapseTog0.addEventListener("click", () => {
    toggler(collapseGroup0, collapseTog0);
});
collapseHed0.addEventListener("click", () => {
    toggler(collapseGroup0, collapseTog0);
});

let collapseTog1 = document.getElementById("collapseTog1");
let collapseHed1 = document.getElementById("collapseHed1");
let collapseGroup1 = document.getElementById("collapseGroup1");
collapseTog1.addEventListener("click", () => {
    toggler(collapseGroup1, collapseTog1);
});
collapseHed1.addEventListener("click", () => {
    toggler(collapseGroup1, collapseTog1);
});

let collapseTog2 = document.getElementById("collapseTog2");
let collapseHed2 = document.getElementById("collapseHed2");
let collapseGroup2 = document.getElementById("collapseGroup2");
collapseTog2.addEventListener("click", () => {
    toggler(collapseGroup2, collapseTog2);
});
collapseHed2.addEventListener("click", () => {
    toggler(collapseGroup2, collapseTog2);
});

let collapseTog3 = document.getElementById("collapseTog3");
let collapseHed3 = document.getElementById("collapseHed3");
let collapseGroup3 = document.getElementById("collapseGroup3");
collapseTog3.addEventListener("click", () => {
    toggler(collapseGroup3, collapseTog3);
});
collapseHed3.addEventListener("click", () => {
    toggler(collapseGroup3, collapseTog3);
});
