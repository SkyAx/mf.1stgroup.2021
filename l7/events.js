let button = document.getElementById('button');
let body = document.getElementsByTagName('body')[0];
let text = document.getElementById('text');
let input = document.getElementById('input');
let startFontSize = 10;

function randomColor() {
  // return '#' + Math.floor(Math.random() * 16777215).toString(16);
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.onclick = function() {
  // alert(text.innerHTML);
};

button.onclick = function() {
  // body.style.background = randomColor();
  // alert(text.innerHTML);
};

body.onscroll = function(event) {
  // body.style.background = randomColor();
};

let someText = 'text!!!';

body.onresize = function(event) {
  // body.style.background = randomColor();

  // let someText2 = 'text2';
  //
  // let newFontSize = function() {
  //   return startFontSize++;
  // };
  //
  // let someText = 'text';
  //
  // text.style.fontSize = `${newFontSize()}px`;

  console.log(event.target);

  if (event.target.clientWidth === 1000) {

  }
};

button.addEventListener('click', function() {
  // alert(text.innerHTML);
  alert(input.value);
});

input.addEventListener('input', function() {
  // alert(input.value);
  text.innerHTML = input.value;
});


