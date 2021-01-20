function sayHi() {
  alert('Привет');
}

// sayHi();

let func = sayHi;

let func2 = func;

// alert(func);

// func2();



let f = function say() {
  say();
  alert('Привет2')
};

// f();

// say();


let a = 2;

// func3();

function func3() {
  alert('Func 3');
}

//
// let age = +prompt("Сколько вам лет?", 20); // 30
// if (age >= 18) {
//   function sayHi() {
//     console.log( 'Прошу вас!' );
//   }
// } else {
//   function sayHi() {
//     console.log( 'До 18 нельзя' );
//   }
// }
// sayHi();



function ask(question, a, b) {
  console.log(confirm(question));
  if (confirm(question)) {
    a();
  } else {
    b();
  }
}

function doSomething() {
  console.log('Вы согласились. ');
  window.replace = 'http://go.site.ru';
}

function notDo() {
  console.log('Вы отменили действие');
  window.replace = 'http://goodbye.site.ru';
}

function getDiscount() {
  alert('Держи скидку 20%');
}

function goToIndexPage() {
  alert('Переходим на главную страницу');
}

ask('Хотите получить скидку?', getDiscount, goToIndexPage);
