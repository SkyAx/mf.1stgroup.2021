function getPlaces() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    let randomNum = Math.random() * (100 - 1) + 1;

    arr.push(Math.floor(randomNum));
  }

  return arr;
}

let cinema = {
  name: 'Дом Кино',
  userFilmChoice: '',
  userPlaceChoice: '',
  isUserChoosePopcorn: false,
  films: [{
    name: 'Один дома',
    places: getPlaces()
  }, {
    name: 'Король лев',
    places: getPlaces()
  }],
  showGreeting: function() {
    alert(`Добро пожаловать в кинотеатр "${this.name}".`);
  },
  getUserFilmChoice: function() {
    let filmsToString = this.films.map(function(film) {
      return film.name;
    });

    let userChoice = prompt(`Выберите фильм, на который хотите пойти. Сегодя в афише: ${filmsToString.join(', ')}`);


    // Если сравнение не дало результата , то в filmIdx запишется -1. Иначе индекс элемента в массиве
    let filmIdx = this.films.findIndex((film) => {
      // Сравнение каждого фильма, его названия, с тем что ввел пользователь
      return film.name === userChoice;
    });

    if (filmIdx === -1) {
      alert(`Фильм ${userChoice} сегодня не показываем.`)
    } else {
      this.userFilmChoice = this.films[filmIdx];
    }
  },
  getUserChooseOfPopcorn: function() {
    this.isUserChoosePopcorn = confirm ('Желаете попкорн?');
  },
  getUserPlace: function() {
    this.userPlaceChoice = prompt(`Выберите место на фильм ${this.userFilmChoice.name}: ${this.userFilmChoice.places}`);
  },
  isExistingFilm: function() {
    // Ищем индекс в массиве films. Возввращаем true или false, сравнивая с -1 (минус один получаем тогда, когда искомого элемента нет в массиве)
    return this.films.findIndex((film) => {
      return film.name === this.userFilmChoice.name;
    }) !== -1;
  },
  isExistingPlace: function() {
    let placeIdx = this.userFilmChoice.places.findIndex((place) => {
      return place === +this.userPlaceChoice;
    });

    return placeIdx !== -1;
  },
  showTotalResult: function() {
    alert(`
      Выбранный фильм:  ${this.userFilmChoice.name}
      Ваше место: ${this.userPlaceChoice}
      ${this.isUserChoosePopcorn ? 'Попкорн включен' : ''}
    `);
  },
  start: function() {
    this.showGreeting();
    this.getUserFilmChoice();

    if (this.isExistingFilm()) {
      this.getUserPlace(this.userFilmChoice);

      if (this.isExistingPlace()) {
        this.getUserChooseOfPopcorn();

        this.showTotalResult();
      } else {
        alert('Вы выбрали неправильно место. Попробуйте снова');
      }
    }
  }
};

cinema.start();


