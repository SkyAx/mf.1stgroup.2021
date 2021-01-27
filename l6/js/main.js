let user = {
  name: 'Elon',
  secondName: 'Musk',
  city: 'Palo-Alto',
  birthDate: '19.02.1976',
  profileImage: 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg', // прочитать про свойство src у картинок. В него можно записывать значение строки адреса картинки
  // Укажите любые ваши значения, вместо пустых строк. Примените стили к блоку с id setting-page
  userSettings: {
    backgroundColor: '#4e8fd9',
    color: '#010115',
    fontSize: '14px'
  },
  loadUserData: function () {
    let userName = document.getElementById('user-name');

    userName.innerHTML = `${this.name} ${this.secondName}`;

    let userCity = document.getElementById('user-city');

    userCity.innerHTML = this.city;

    let userBirthDate = document.getElementById('user-birth-date');

    userBirthDate.innerHTML = this.birthDate;

    let userImage = document.getElementById('user-image');

    userImage.src = this.profileImage;
  },
  loadUserSettings: function () {
    let userPageElement = document.getElementById('setting-page');
    userPageElement.style.background = this.userSettings.backgroundColor;
    userPageElement.style.color = this.userSettings.color;
    userPageElement.style.fontSize = this.userSettings.fontSize;
  },
  loadEventListeners: function() {
    let setButton = document.getElementById('set-settings');

    let settingForm = document.getElementById('setting-form');

    settingForm.addEventListener('submit', function(event) {
      event.preventDefault();
    });

    setButton.addEventListener('click', function() {
      let userCityInputValue = document.getElementById('user-city-input').value;
      let userBirthDateInputValue = document.getElementById('user-birth-date-input').value;

      let userCity = document.getElementById('user-city');
      let userBirthDate = document.getElementById('user-birth-date');

      userCity.innerHTML = userCityInputValue;
      userBirthDate.innerHTML = userBirthDateInputValue;
    });
  },
  load() {
    this.loadUserData();
    this.loadUserSettings();
    this.loadEventListeners();
  }
};

user.load();

