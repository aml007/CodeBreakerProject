let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');

console.log(answer.value);
console.log(attempt.value);

function guess() {
  let input = document.getElementById('user-guess');

  if (!answer.value || !attempt.value) {
    setHiddenFields();
  }

  if (!validateInput(input)) {
    return false;
  } else {
    attempt.value++;
  }
}

function setHiddenFields() {
  let randomNumber = Math.floor(Math.random() * 10000);

  randomNumber = randomNumber.toString();

  while (randomNumber.length < 4) {
    randomNumber = `0${randomNumber}`;
  }

  answer.value = randomNumber;
  attempt.value = 0;
}

function setMessage(text) {
  message.innerHTML = text;
}

function validateInput(number) {
  if (number.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
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