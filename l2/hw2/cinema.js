let films = ['Один дома', 'Король лев'];
let filmsString = `Добро пожаловать в "Дом Кино". Сегодня в афише ${films.join(', ')}`;

let cinema = {
  films: ['Один дома', 'Король лев'],
  filmsString: `Добро пожаловать в "Дом Кино". Сегодня в афише ${films.join(', ')}`,
  isExistingFilm: function(userFilm) {
    // Ищем индекс в массиве films. Возввращаем true или false, сравнивая с -1 (минус один получаем тогда, когда искомого элемента нет в массиве)
    return films.findIndex(function(film) {
      return film === userFilm;
    }) !== -1;
  }

};

// Показываем афишу
alert(filmsString);

// Здесь задаю вопрос у пользователя
let userFilmChoice = prompt('Выберите фильм, на который хотите пойти');

function isExistingFilm(userFilm) {
  // Ищем индекс в массиве films. Возввращаем true или false, сравнивая с -1 (минус один получаем тогда, когда искомого элемента нет в массиве)
  return films.findIndex(function(film) {
    return film === userFilm;
  }) !== -1;
}

function getFilmIdx(userFilm) {
  // Берем индекс и возвращаем фильм под этим индексом

  let idx = films.findIndex(function(film) {
    return film === userFilm;
  });

  if (idx !== -1) {
    return films[idx];
  }
}

if (isExistingFilm(userFilmChoice)) {
  // ... Здесь ваш код дальше

  let userRowChoice = prompt('Выберите ряд, на который хотите пойти');
  let userPlaceChoice = prompt('Выберите место, на который хотите сесть');
  let isWantPopcorn = confirm('Желаете ли попкорн?');

  alert(`Вы пойдете на фильм: ${userFilmChoice}. Ваш ряд: ${userRowChoice}, userPlaceChoice, isWantPopcorn`);
} else {
  alert('Извините, сегодня в кино такого фильма нет.')
}
