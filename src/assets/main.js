let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000);
}

// Test
var test = function() {
  const max = 10000; // 10000 not included
  let numbers = [], sizes = [], i = 0, j = 0;

  for (i; i < 100; i++) {
    let number = Math.floor(Math.random() * max);
    numbers.push(number);
  }

  for (j; j < max; j++) {
    sizes.push(numbers.filter(function(value) {return value == j}).length);
  }

  console.log(numbers);
  console.log(sizes);
};