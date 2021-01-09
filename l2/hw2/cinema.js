let films = ['Один дома', 'Король лев'];
let filmsString = `Добро пожаловать в "Дом Кино". Сегодня в афише ${films.join(', ')}`;

// Показываем афишу
alert(filmsString);

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

  let userRowChoice = prompt('...');
} else {
  alert('Извините, сегодня в кино такого фильма нет.')
}
