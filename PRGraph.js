const { CityGraph } = require('./CityGraph');

// Initializing Puerto Rico
const PR = new CityGraph();

// Adding several cities to Puerto Rico.
const start = PR.addCity('San Juan');
PR.addCity('Guaynabo');
PR.addCity('Rio Grande');
PR.addCity('Humacao');
PR.addCity('Culebras');
PR.addCity('Caguas');
PR.addCity('Ponce');
PR.addCity('Arecibo');
PR.addCity('Isabela');
PR.addCity('Villalba');
PR.addCity('Vega Baja');
const finish = PR.addCity('MayaWest');

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
};
