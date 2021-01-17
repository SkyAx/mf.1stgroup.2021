let city = {
  name: 'Minsk',
  key: '123',
  population: 2000000,
  isCapital: true,
  subway: {
    countOfStation: 35,
    lines: ['Moskovskaya', 'Avtozovodskaya', 'Novaya']
  },
  getFullInformation: function() {
    console.log(`This is ${this.name} city. Population is ${this.population}. ${this.getCityType()}`);
  },
  getCityType: function() {
    return this.isCapital ? 'Is capital' : 'Is regional city';
  }
};

let city = {
  name: 'Minsk',
  key: '123',
  population: 2000000,
  isCapital: true,
  subway: {
    countOfStation: 35,
    lines: ['Moskovskaya', 'Avtozovodskaya', 'Novaya']
  },
  getFullInformation: function() {
    console.log(`This is ${this.name} city. Population is ${this.population}. ${this.getCityType()}`);
  },
  getCityType: function() {
    return this.isCapital ? 'Is capital' : 'Is regional city';
  },
};

// console.log(obj);

// function printObject(obj) {
//   for (let key in obj) {
//     // console.log(key);
//     // console.log(obj[key]);
//     console.log(obj[key]);
//     console.log(obj['subway']);
//   }
// }

// printObject(city);

// let name = 'MinSK';
//
// console.log(name.toLowerCase());

// let userPrompt = prompt('Введите название свойства');
//
// userPrompt = userPrompt.toLowerCase();
//
// alert(userPrompt);
//
// alert(city[userPrompt]);

// let userName = prompt('Введите имя');
//
// userName = userName.toLowerCase();
//
// userName = userName.charAt(0).toUpperCase() + userName.slice(1);
//
// alert(userName);


