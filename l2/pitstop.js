let azs = {
  name: 'Lukoil',
  fuels: [
    {
      name: 92,
      price: 2
    },
    {
      name: 95,
      price: 2.1
    },
    {
      name: 98,
      price: 2.5
    }
  ],
  getFuelsTypes: function() {
    let result = '';

    this.fuels.forEach(function(fuel) {
      result = `${result} ${fuel.name},`
    });

    return result;
  },
  getFuelTypeIdx: function(type) {
    return this.fuels.findIndex(function(fuel) {
      return fuel.name === +type;
    });
  },
  checkFuelTypeIdx: function(type) {
    return this.getFuelTypeIdx(type) !== -1;
  }
};


let result = prompt(`Выберите вид топлива: ${azs.getFuelsTypes()}`);

if (azs.checkFuelTypeIdx(result)) {
  let fuelCount = prompt('Выведите колечество');

  let index = azs.getFuelTypeIdx(result);

  let resultToPay = azs.fuels[index].price * +fuelCount;

  alert(`Заправляйтесь! \n Вид топлива: ${azs.fuels[index].name} \n Сумма к оплате: ${resultToPay} BYN`);
} else {
  alert('Такого топлива у нас нет.');
}

