const { CityGraph } = require('./CityGraph');

// Initializing Puerto Rico
const PR = new CityGraph();

// Adding several cities to Puerto Rico.
const start = PR.addCity('San Juan');
let a = PR.addCity('Guaynabo');
let b = PR.addCity('Rio Grande');
let c = PR.addCity('Humacao');
let d = PR.addCity('Culebras');
let e = PR.addCity('Caguas');
let f = PR.addCity('Ponce');
let g = PR.addCity('Arecibo');
let h = PR.addCity('Isabela');
let i = PR.addCity('Villalba');
let j = PR.addCity('Vega Baja');
const finish = PR.addCity('MayaWest');

// Map from city to time it takes to get there (in minutes) from finish
const timeMap = new Map();
timeMap.set(start, 120);
timeMap.set(a, 115);
timeMap.set(b, 150);
timeMap.set(c, 180);
timeMap.set(d, Infinity);
timeMap.set(e, 130);
timeMap.set(f, 65);
timeMap.set(g, 45);
timeMap.set(h, 30);
timeMap.set(i, 145);
timeMap.set(j, 110);
timeMap.set(finish, 0);


// Adding several directed roads with distance in miles. 
PR.addRoad('San Juan', 'Guaynabo', 10);
PR.addRoad('San Juan', 'Rio Grande', 24);
PR.addRoad('San Juan', 'Ponce', 76);
PR.addRoad('San Juan', 'Humacao', 35);
PR.addRoad('San Juan', 'Caguas', 19);
PR.addRoad('Guaynabo', 'Vega Baja', 25.5);
PR.addRoad('Vega Baja', 'Villalba', 41);
PR.addRoad('Rio Grande', 'Humacao', 14);
PR.addRoad('Villalba', 'Ponce', 15);
PR.addRoad('Caguas', 'Ponce', 54);
PR.addRoad('Humacao', 'Ponce', 78);
PR.addRoad('Ponce', 'MayaWest', 49);
PR.addRoad('Guaynabo', 'Arecibo', 60);
PR.addRoad('Arecibo', 'MayaWest', 50);
PR.addRoad('Isabela', 'MayaWest', 28);
PR.addRoad('Arecibo', 'Isabela', 35);

module.exports = {
  PR,
  start,
  finish,
  timeMap,
};
