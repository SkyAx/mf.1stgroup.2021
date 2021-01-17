let films = ['Один дома', 'Король лев'];
let filmsString = `Добро пожаловать в "Дом Кино". Сегодня в афише ${films.join(', ')}`;

// Показываем афишу
alert(filmsString);

let userFilmChoice = prompt(`Выберите фильм, на который хотите пойти. Сегодя в афише: ${films.join(', ')}`);

function isExistingFilm(userFilm) {
    // Ищем индекс в массиве films. Возввращаем true или false, сравнивая с -1 (минус один получаем тогда, когда искомого элемента нет в массиве)
    return films.findIndex(function(film) {
        return film === userFilm ;
    }) !== -1;
}

function isUserChoosePopcorn(userChoice){
  return userChoice ? "Попкорн выбран" : "Попкорн не выбран";
}

function getFilmIdx(userFilm) {
    // Берем индекс и возвращаем фильм под этим индексом

    let idx = films.findIndex(function(film) {
        return (film === userFilm);
    });

    if (idx !== -1) {
       return films[idx] ;
    }
}

if (isExistingFilm(userFilmChoice)) {

    // ... Здесь ваш код дальше
    let userRowChoice = prompt("Выберите ряд :1-10");

    if (userRowChoice) {
      let userPlaceChoise = prompt("Выберите место :1-15");

      if (userPlaceChoise) {
        let userPopcornChoice = confirm ("Желаете попкорн?");

        if (userRowChoice <= 10 &&  userPlaceChoise <= 15) {
          alert(`
          Выбранный фильм:  ${userFilmChoice}
          Ваш ряд: ${userPlaceChoise}
          Ваше место: ${userRowChoice}
          ${isUserChoosePopcorn(userPopcornChoice)} 
        `);
        } else {
          alert("Некорреткно введены данные по ряду и месту. Повторите попытку");
        }
      }
    }
} else {
    alert('Извините, сегодня в кино такого фильма нет.')
}
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

function getRow() {
  let userRowChoice = prompt("Выберите ряд: 1-10");

  for (; !userRowChoice;) {
    alert('Такого ряда нет');
    userRowChoice = prompt("Выберите ряд: 1-10");
  }
}

// getRow();

