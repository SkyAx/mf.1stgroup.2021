let user = {
  name: 'Elon',
  secondName: 'Musk',
  city: 'Palo-Alto',
  birthDate: '19.02.1976',
  profileImage: '', // прочитать про свойство src у картинок. В него можно записывать значение строки адреса картинки
  // Укажите любые ваши значения, вместо пустых строк. Примените стили к блоку с id setting-page
  userSettings: {
    backgroundColor: '',
    color: '',
    fontSize: ''
  },
  loadUserData: function () {
    // Код метода установки значений с информацией о пользователе
    let userName = document.getElementById('user-name');

    userName.innerHTML = `${user.name} ${user.secondName}`;

    // Ваш код здесь
  },
  loadUserSettings: function () {
    // Код метода установки настроек страницы
  },
  load() {
    this.loadUserData();
    this.loadUserSettings();
  }
};


