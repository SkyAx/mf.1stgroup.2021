// let adminEmails = ['al@la.com', 'al1@la.com', 'al2@la.com'];
// let currentEmail = 'al1@la.com';

// for(let counter = 0; counter < adminEmails.length; counter++) {
//   // debugger;
//
//   //alert(adminEmails[counter]);
//
//   let isCorrectEmail = adminEmails[counter] === currentEmail;
//
//   if (isCorrectEmail) {
//     alert('Was logged');
//     break;
//   }
//
//   if (counter === adminEmails.length - 1 && !isCorrectEmail) {
//     alert('Disconnect');
//   }
// }

//Работа с массиовм через метод forEach

// adminEmails.forEach(function(email, idx) {
//   let isCorrectEmail = email === currentEmail;
//
//   if (isCorrectEmail) {
//     alert('Was logged');
//     return;
//   }
//
//   if (idx === adminEmails.length - 1 && !isCorrectEmail) {
//     alert('Disconnect');
//   }
// });

//Динамическое создание и заполнение элементов в массиве

// for (let i = 0; i <= 10; i++) {
//   // arr.push('Index: ' + i);
//   arr[i] = 'Index: ' + i;
// }

// console.log(arr);





function getUserEmail() {
  return prompt('Введите адрес эл. почты');
}

function getUserPassword() {
  return prompt('Введите пароль');
}

function login(arr, email, password) {
  for(let counter = 0; counter < arr.length; counter++) {
    let isCorrectEmail = arr[counter].email === email;
    let isCorrectPassword = arr[counter].password === password;

    if (isCorrectEmail && isCorrectPassword) {
      alert('Was logged');
      break;
    }

    if (counter === arr.length - 1 && !isCorrectEmail || !isCorrectPassword) {
      alert('Disconnect');
      break;
    }
  }
}

let userEmail = getUserEmail();
let userPassword = getUserPassword();

let admins = [
    {
      email: 'al@la.com',
      password: '123123'
    },
    {
      email: 'al1@la.com',
      password: '1231231'
    },
    {
      email: 'al2@la.com',
      password: '444444'
    }
];

// let admin = {
//   email: 'al@la.com',
//   password: '123132'
// };

login(admins, userEmail, userPassword);


