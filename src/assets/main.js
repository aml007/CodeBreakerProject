let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let results = document.getElementById('results');
let code = document.getElementById('code');
let guessing = document.getElementById('guessing-div');
let replay = document.getElementById('replay-div');

function guess() {
  let input = document.getElementById('user-guess');

  if (!answer.value || !attempt.value) {
    setHiddenFields();
  }

  if (!validateInput(input.value)) {
    return false;
  } else {
    attempt.value++;
  }

  if (getResults(input.value)) {
    setMessage('You Win! :)');
    showAnswer(true);
    showReplay();
  } else if (attempt.value >= 10) {
    setMessage('You Lose! :(');
    showAnswer(false);
    showReplay();
  } else {
    setMessage('Incorrect, try again.');
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

function getResults(input) {
  const answerValue = answer.value;
  const answerValues = answerValue.split('');
  const inputValues = input.split(''); // Get each number of user guess
  const inputValuesLength = inputValues.length; // Input length
  let countCorrect = 0;

  let result = '<div class="row"><span class="col-md-6">' + input
    + '</span><span class="col-md-6">';
  for (let i = 0; i < inputValuesLength; i++) {
    if (inputValues[i] == answerValues[i]) {
      result += '<span class="glyphicon glyphicon-ok"></span>';
      countCorrect++;
    } else if (answerValue.indexOf(inputValues[i]) != -1) {
      result += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      result += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  result += '</span></div>';

  results.innerHTML += result;

  if (countCorrect === 4) {
    return true;
  } else {
    return false;
  }
}

function showAnswer(result) {
  code.innerHTML = answer.value;

  if (result) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
}

function showReplay() {
  guessing.style.display = 'none';
  replay.style.display = 'block';
}


/* Test
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
*/