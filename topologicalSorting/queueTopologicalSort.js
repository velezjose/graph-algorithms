const { Queue } = require('./Queue.js');

let queueTopologicalSort = graph => {
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

module.exports = {
  queueTopologicalSort,
};
