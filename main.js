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
    "img/10.jpg"
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
function carouselFwd(arr) {
    arr.push(arr.shift());
    assign();
}
// CAROUSEL ENDS

// VERSES BEGIN
let verses, titles, struct;
function loadDataset(requestURL) {
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  console.log("works");
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    let res = request.response;
    console.log("res loaded", res);
    verses = res.verses;
    titles = res.titles;
    titles = titles.map(a => a.toUpperCase())
    struct = fyShuffle(formStructure())
    // insert layout function here
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
  console.log("--");
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
    console.log(count);
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
}




loadDataset("txt/whitman.json");
