let a = 1;
let obj = null;

let object = {
  height: 20,
  width: 20,
  color: '#fff'
};

let result = 1 + 2;

let num = '2';

num = +num;

let str = 1 + '2';

let str1 = 1 + '3';

let arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('reverse');

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

let names = ['Alexander', 'Romina', 'Liza'];

for (let i = 0; i < names.length; i++) {
  let str = 'Пользователь: ';

  console.log(str + names[i]);
}

let s = '';

let t = "";

let r = ``;

let newNames = names.map(function(name) {
  return `Это ученик школы ${name}`;
});

console.log(newNames);

let heading = document.getElementsByClassName('main-heading')[0];

heading.innerHTML = 'Ученики школы Myfreedom';

heading.style.color = '#b85dff';
heading.style.fontFamily = 'sans-serif';

let list = document.createElement('ul');

list.classList.add('main-list');

let container = document.getElementById('app');

container.append(list);

let listItems = newNames.map(function(name) {
  let item = document.createElement('li');

  item.innerHTML = name;

  return item;
});

console.log(listItems);

listItems.forEach(function(item) {
  list.append(item);
});

let dateFromInput = document.getElementById('date-from');

dateFromInput.addEventListener('change', function(e) {
  let resultFromText = document.getElementById('result-from-text');
  resultFromText.innerHTML = e.target.value;
});

let dateToInput = document.getElementById('date-to');

dateToInput.addEventListener('change', function(e) {
  let resultToText = document.getElementById('result-to-text');
  resultToText.innerHTML = e.target.value;
});

let colorPicker = document.getElementById('page-color');

colorPicker.addEventListener('input', function(e) {
  document.getElementsByTagName('body')[0].style.backgroundColor = e.target.value;
});

document.getElementById('page-text-color').addEventListener('input', function(e) {
  document.getElementsByTagName('body')[0].style.color = e.target.value;
});
