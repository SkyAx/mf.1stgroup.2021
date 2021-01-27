// // // Создать произвольный объект, вклчающий в себя 3 примитивных типа данны (не undefined и null), массив и объект, как свойство.
let user ={
    userName: "Sasha",
    age: 18,
    isAdmin: true,
    userHight: [180, 190, 200],
    userAccess: {
        login:"Sasha",
        password: Number("12345")
    }
};


alert(user.userName);
alert(user.age);
alert(user.userHight);
alert(user.userAccess.login);
alert(user.userAccess.password);

// // Создать из пустого массива, массив на 10 эл-тов через цикл for
let arr = [];
 for( let i = 0; i < 10; i++){
    arr[i] = i+1;
    arr.push(i+1);
 }
console.log(arr);
// // Упростить выражение внутри if

let isOk = true;

if (isOk) {
  console.log('Right!');
}
// // Привести значения из prompt к числам, для получения корректного мат. вычисления

let firstNum = Number(prompt('Введите первое число'));

alert(typeof firstNum);

let secondNum = Number(prompt('Введите второе число'));

alert('Сумма: ' + (firstNum + secondNum));

// // 1. Создать функцию, принимающую один парметр name. Функция выводит через alert "Вас зовут <name>"

let nameOfUser = prompt("Введите Ваше имя:");
function getName (name) {
    alert(`Вас зовут ${name}`);
}
getName(nameOfUser);

function getResultOfMultiplication( firstNumber, secondNumber){
let firstOFNumber = +prompt("Введите первое число");
let secondOFNumber = +prompt("Введите второе число");
alert(`Резльтат умножения: ${firstOFNumber * secondOFNumber} `);
}
getResultOfMultiplication();

//  Вывести длину массива через alert

let names = ['Аня', 'Дима', 'Даша', 'Сергей', 'Олег'];

// // 4. Преобразовать массив имен таким образом, чтобы перед каждым именем было добавлено слово "пользователь: " . Должно получиться "Пользователь: Аня" ...
// // Подсказка : используйте метод map

// // 5. Циклом for пройтись по преобразованному массиву, и вывести каждый элемент на экран через alert

let names = ['Аня', 'Дима', 'Даша', 'Сергей', 'Олег'];

alert( `Длина массива: ${names.length} элементов`);

let newNames = names.map(function (Arrname){
    return `Пользователь: ${Arrname}\n`
});

alert(newNames);

for (let i = 0; i < 5; i++){
    alert(newNames[i]);
}
