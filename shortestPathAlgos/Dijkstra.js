const { GeneralBinaryMinHeap: MinHeap } = require('../priorityQueues/GeneralBinaryMinHeap.js');
const { PR, start, finish } = require('../graphs/PRGraph.js');
// const { FakeCity, start: fakeStart, finish: fakeFinish } = require('../graphs/FakeCityGraph.js');


const Dijkstra = function(graph, src, dest) {
  let distanceMap = new Map();
  let parentMap = new Map();
  let mH = new MinHeap();

  // Initialize distance to all cities as Infinity
  graph.cities.forEach(city => distanceMap.set(city, Infinity));

  // Distance from src to src = 0
  distanceMap.set(src, 0);
  parentMap.set(src, null);

  // Inserting value 0 and object src into min heap
  mH.insert(0, src);

  // Initializing current, currentDistance and extracted boolean
  let current, currentDist;
  let extracted = false;
  
  // While priority queue is not empty and we haven't extracted the destination
  while (mH.size() !== 0 && !extracted) {
    current = mH.extractMin();

    let { obj: currentCity } = current;
    extracted = currentCity === dest ? true : false;

    if (extracted) break;

    currentCity.outgoing.forEach(road => {
      const { to: toCity, from: fromCity, distance } = road;

      if (distanceMap.get(toCity) > distanceMap.get(fromCity) + distance) {
        distanceMap.set(toCity, distanceMap.get(fromCity) + distance);
        parentMap.set(toCity, fromCity);
      }

      mH.insert(distanceMap.get(toCity), toCity);
    });
  }

  // If it was never extracted from the minHeap, it means there is no path from src to dest
  if (!extracted) {
    return null;
  }

  let path = [dest];
  let currentNode = parentMap.get(dest);

  while (currentNode !== null) {
    path.push(currentNode);
    currentNode= parentMap.get(currentNode);
  }

  return path.reverse();
};

// Shortest Path from San Juan to MayaWest
let SJtoMaya = Dijkstra(PR, start, finish);
SJtoMaya.forEach((city, i) => console.log(`${i}: ${city.name}`));

// Does not work with this FakeCity because it has negative weighted edges
// If you don't believe me, try it out for yourself –> JS heap will run out of memory.
// let FakeStartToFakeFinish = Dijkstra(PR, fakeStart, fakeFinish);
// FakeStartToFakeFinish.forEach((city, i) => console.log(`${i}: ${city.name}`));
