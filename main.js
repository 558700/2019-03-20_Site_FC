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
let verses, titles;

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
  }
}

loadDataset("txt/verses.json");
