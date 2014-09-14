var reasons = [
  "she is always prepared",
  "she bakes delicious cookies",
  "she is the best friend anyone could have",
  "she\'s secretly funny and weird",
  "she gives good advice",
  "she always believes in me",
  "she never gets tired of my whining",
  "she is kind hearted and generous",
  "she let's me text her my worries in long multiple-texts even if it's 2am",
  "she let's me borrow her clothes when we go out cuz I don't have anything dressy",
  "she does my eyeliner for me so that I don't have to",
  "she always makes me happy that I have a best friend like her",

  "she doesn't like steak. more for me.",
  "yeah.",
  "she doesn\'t judge me when I get drunk after one shot. jk she does :(",
  "she loves my girl socks. secretly.",
  "she likes magic tricks",
  "she forgives me for making her drive me everywhere",
  "she doesn\'t mind when I eat half her food",
  "she is an excellent work wife",
  "she wouldn't mind if I couldn't come up with too many of these reasons"
];

var randReasonIndex = Math.floor(Math.random() * (reasons.length - 1)) + 1;

document.getElementById('reason').innerHTML = reasons[randReasonIndex];

var eric = document.getElementById('eric'),
  dena = document.getElementById('dena');

eric.addEventListener('click', function(e) {
  e.preventDefault();
  showAnswers();

  if (isCorrect('eric')) {
    showYay();
  } else {
    showNay();
  }
});

dena.addEventListener('click', function(e) {
  e.preventDefault();
  showAnswers();

  if (isCorrect('dena')) {
    showYay();
  } else {
    showNay();
  }
});

var isDena = randReasonIndex <= 11;

function isCorrect(guess) {
  if (isDena) {
    return guess == 'dena';
  } else {
    return guess == 'eric';
  }
}

function showYay() {
  var yay = document.getElementById('yay');
  yay.className = '';

  var nay = document.getElementById('nay');
  nay.className = 'hidden';
}

function showNay() {
  var nay = document.getElementById('nay');
  nay.className = '';

  var yay = document.getElementById('yay');
  yay.className = 'hidden';
}

function showAnswers() {
  if (isDena) {
    dena.className = 'btn-mine' + ' right';
    eric.className = 'btn-mine' + ' wrong';
  } else {
    eric.className = 'btn-mine' + ' right';
    dena.className = 'btn-mine' + ' wrong';
  }
}
