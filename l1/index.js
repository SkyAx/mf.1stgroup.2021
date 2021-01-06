let language = 'ru';
const language2 = 'ru';
// Рабоатть не будет
// language = 'en';

//====================

//NUMBER

let num = 12;

num = 13.123;

console.log(num);

//STRING

let str = 'Sasha';

let str1 = "asdasdnasjd \'asd\' ";

console.log(str1);

//BOOLEAN

let bul = true;

let bul2 = false;

//UNDEFINED & NULL

let none;

console.log(none);

none = null;

console.log(none);

//OBJECT

let human = {
  age: 26,
  name: 'Sasha'
};

console.log(human.number);

console.log(human.age);

human = {
  name: 'Dima',
  printName: function() {
    console.log(this.name);
  }
};

console.log(human.age);

console.log(human.age);

human.printName();

// console.log(human);

if (human) {
  console.log('Вы вошли')
}

function getObj (userName, userAge) {
  return {
    name: userName,
    age: userAge
  };
}

let newHuman = getObj('Dima', 21);

console.log(newHuman);

//====================

//PART 2

let name = 'Sasha';

let secondName = 'Konkov';

let fullName = name + secondName;

// `${variable}`
let fullName2 = `User ${name} ${secondName}`;

// old
console.log(name + ' ' + secondName + '.');

console.log(fullName);
console.log(fullName2);


// Унарный плюс приводит к числу слева и права от бинарного плюса
let result = +'1' + +'2' + -1;

let strToNum = 'asd12';

let result2 = Number.parseInt(strToNum);

console.log(result2);

console.log(result);

console.log(typeof result);


//

let counter = 1;
let counter2 = counter;
counter++; // более короткая запись для i = i + 1.
console.log(counter); // 2
console.log(counter2); // 1

let counter1 = 1;
counter1 = ++counter1; // (*)
let counter3 = ++counter1;
console.log(counter1); // 2
console.log(counter3); // 2


console.log('=====ЦИКЛ for===');
//ЦИКЛ for

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// >, <, >=, <=, ==, ===, !=, !==
console.log(1 == '1');

let value = 0;

if (value) {
  console.log('Success!');
} else {
  console.log('Not success!');
}

for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log('Нечетные:' + i);
  } else {
    console.log('Четное:' + i);
  }
}


let str3 = {};

if (str3) {
  console.log('OK');
}


// Оператор ?

// условие ? если верно : если не верно

let password = '12345';

let isOk = password === '1q2w3e4r5t' ? 'Пропускаем вас' : 'Уходи!Уходи!Уходи!';

console.log(isOk);

function getResult(number) {
  return number > 0 ? 'Число больше нуля' : 'Ошибка';
  if (number > 0) {
    return 'Число больше нуля';
  } else {
    return 'Ошибка';
  }
}

let res = getResult(100);
let res2 = getResult(0);
console.log(res);
console.log(res2);

let password2 = prompt('Введите ваш пароль');

let result3 = password2 === password ? alert('Ok!') : alert('Not Ok!');

console.log(result3);

console.log(alert('Ok!'));

confirm('Аааа?)');
