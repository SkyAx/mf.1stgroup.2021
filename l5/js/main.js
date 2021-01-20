document.body.style.backgroundColor = '#95dfff';

let spans = document.getElementsByTagName('span');

// let marginBottom = prompt('Введите отступ для текста');
//
// marginBottom = parseInt(marginBottom);

function randomColor () {
  // return '#' + Math.floor(Math.random() * 16777215).toString(16);
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = randomColor();
  spans[i].style.display = 'block';
  spans[i].style.marginBottom = `20px`;
}

// let footer = document.getElementsByClassName('footer')[0];

// console.log(footer);


let links = document.getElementsByClassName('contact-link');

for (let c = 0; c < links.length; c++) {
  links[c].style.textDecoration = 'none';
  links[c].style.display = 'inline-block';
  links[c].style.color = 'grey';
  links[c].style.marginRight = '30px';
}
