const { Queue } = require('./Queue.js');

let queueTopSort = graph => {
  let order = new Queue();
  let processNext = new Queue();

  graph.cities.forEach(city => {
    if (city.incoming.length === 0) processNext.enqueue(city);
  });

  while (!processNext.isEmpty()) {
    let curr = processNext.dequeue();
    order.enqueue(curr.name);

    curr.outgoing.forEach(road => {
      graph.removeRoad(curr.name, road.to.name);

      if (road.to.incoming.length === 0) {
        processNext.enqueue(road.to);
      }
    });
  }

  return order.toArray();
};




// Tests Section: 



// Importing a FakeCityGraph from 
const { FakeCity } = require('../graphs/FakeCityGraph.js');

// Remove road to make the FakeCityGraph acyclic
FakeCity.removeCity('F');

let fcTopOrder = queueTopSort(FakeCity); 
console.log(fcTopOrder, 'is the topological sort of Fake City graph.');


// Importing Puerto Rico graph
const { PR } = require('../graphs/PRGraph.js');
let PRTopOrder = queueTopSort(PR);
console.log(PRTopOrder, 'is the topological sort of Puerto Rico graph.')
