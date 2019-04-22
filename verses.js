// TODO:
let verses = ['a','b','c','d','e','f','x','h','i'];
let imgs = [1,2,3,4,5,6,7,8,9];
let titles = ['ab', 'cd', 'ef', 'gh', 'ij'];

// choose a random number, input min and max
function chooseRandom(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function arrayPicker(arr) {
  return arr[chooseRandom(0,arr.length)]
}

// fisher-yates shuffle implementation
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function fyShuffle(arr) {
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
      res.push(arrayPicker(imgs))
      break;
    }
    if (count === 9) {
      break;
    }
    switch (chooseRandom(0,2)) {
      case 0:
        res.push(arrayPicker(imgs))
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


let struct = fyShuffle(formStructure())
console.log(struct);
