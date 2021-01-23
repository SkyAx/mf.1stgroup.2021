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
  // spans[i].style.color = randomColor();
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

let obj = {
  a: 'a',
  getA: function() {
    return this.a;
  },
  arr: [1, 2, 3]
};

let mainEl = obj.getA();

let mainElem = document.getElementById('main');

console.log(mainElem);

console.log(obj.arr[0]);

let childs = mainElem.getElementsByClassName('first');

console.log(childs);

let firstChild = childs[0];

console.log(firstChild);


let someElem = document.querySelector('#main');

someElem.style.fontSize = '48px';

let text = someElem.textContent;

alert(text);

// document.createElement()

// someElem.innerHTML = 'Меня зовут Александр';

// let secondParagraph =  document.querySelector('#main');

//
// let fourth = document.querySelector('main p span:nth-child(4)');
//
// let allElems =  document.querySelectorAll('.elem');
//
// console.log(fourth);

let emailValue = document.getElementById('email-input').value;

alert(emailValue);


