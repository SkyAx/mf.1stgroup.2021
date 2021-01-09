console.log(!!'asd');

oldValue = 2015;

showOldValue = function() {
  console.log(oldValue);
};


let arr = ['a', 'b', 'c'];

let obj = {

};

let str = new String('123');

console.log(arr.toString());
console.log(obj.toString());
console.log(str.toString());

let city = {
  name: 'Minsk',
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

city.getFullInformation();

city.name = 'Vitebsk';
city.isCapital = false;

delete city.name;

city.getFullInformation();

city.name = 'Brest';

city.getFullInformation();

city.zip = 220001;

console.log(city);

console.log(city.subway.lines[0]);

city.subway.lines[3] = 'Novaya borovaya';

// console.log(city.subway.lines);

for (let i = 0; i < city.subway.lines.length; i++) {
  city.subway.lines[i] = `Line: ${city.subway.lines[i]}`;
}

city.subway.lines = city.subway.lines.map(function(line, idx) {
  return `Minsk ${line}`;
});

city.subway.lines.splice(3, 1);

console.log(city);

