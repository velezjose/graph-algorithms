const { CityGraph } = require('./CityGraph.js');

// Initializing Puerto Rico
const FakeCity = new CityGraph();

// Adding several cities to Puerto Rico.
const start = FakeCity.addCity('A');
FakeCity.addCity('B');
FakeCity.addCity('C');
FakeCity.addCity('D');
FakeCity.addCity('E');
FakeCity.addCity('F');
FakeCity.addCity('G');
FakeCity.addCity('H');
FakeCity.addCity('H');
FakeCity.addCity('I');
const finish = FakeCity.addCity('J');

// Adding several directed roads with distance in miles. 
FakeCity.addRoad('A', 'B', 10);
FakeCity.addRoad('A', 'C', 3);
FakeCity.addRoad('A', 'D', 4);
FakeCity.addRoad('B', 'C', -3);
FakeCity.addRoad('B', 'H', 7);
FakeCity.addRoad('C', 'G', 11);
FakeCity.addRoad('C', 'H', 5);
FakeCity.addRoad('H', 'G', 4);
FakeCity.addRoad('H', 'J', -15);
FakeCity.addRoad('G', 'J', 3);
FakeCity.addRoad('E', 'J', 5);
FakeCity.addRoad('G', 'D', -10);
FakeCity.addRoad('G', 'F', 70);
FakeCity.addRoad('F', 'D', 9);
FakeCity.addRoad('D', 'I', 8);
FakeCity.addRoad('D', 'E', 11);
FakeCity.addRoad('I', 'F', 0);
FakeCity.addRoad('I', 'J', -100);
FakeCity.addRoad('D', 'E', 11);

module.exports = {
  FakeCity,
  start,
  finish,
};
