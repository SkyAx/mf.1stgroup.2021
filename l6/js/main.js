let user = {
  name: 'Elon',
  secondName: 'Musk',
  city: 'Palo-Alto',
  birthDate: '19.02.1976'
};

let userName = document.getElementById('user-name');

userName.innerHTML = `${user.name} ${user.secondName}`;
