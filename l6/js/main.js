let user = {
  name: 'Elon',
  secondName: 'Musk',
  city: 'Palo-Alto',
  birthDate: '19.02.1976',
  profileImage: 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg', // прочитать про свойство src у картинок. В него можно записывать значение строки адреса картинки
  // Укажите любые ваши значения, вместо пустых строк. Примените стили к блоку с id setting-page
  userSettings: {
    backgroundColor: '#b2b2b2',
    color: '#010115',
    fontSize: '100px'
  },
  loadUserData: function () {
    // Код метода установки значений с информацией о пользователе
    let userName = document.getElementById('user-name');

    userName.innerHTML = `${this.name} ${this.secondName}`;

    let userImage = document.getElementById('user-image');

    userImage.src = this.profileImage;
  },
  loadUserSettings: function () {
    let userPageElement = document.getElementById('setting-page');
    userPageElement.style.background = this.userSettings.backgroundColor;
    userPageElement.style.color = this.userSettings.color;
    userPageElement.style.fontSize = this.userSettings.fontSize;
  },
  load() {
    this.loadUserData();
    this.loadUserSettings();
  }
};

user.load();


