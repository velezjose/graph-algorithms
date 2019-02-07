const { PR, start, finish, timeMap } = require('../graphs/PRGraph.js');
const { GeneralBinaryMinHeap: MinHeap } = require('../priorityQueues/GeneralBinaryMinHeap.js');

const aStar = (graph, src, dest) => {
  let heuristicHeap = new MinHeap();
  let distanceMap = new Map();
  let parentMap = new Map();

  graph.cities.forEach(city => {
    distanceMap.set(city, Infinity);
    parentMap.set(city, null);
  });

  distanceMap.set(src, 0);
  let heuristic = timeMap.get(src) + distanceMap.get(src);
  heuristicHeap.insert(heuristic, src);
  let extracted = false;

  while (heuristicHeap.size() > 0 && !extracted) {
    let current = heuristicHeap.extractMin();
    let { obj: currentCity } = current;
    extracted = currentCity === dest ? true : false;

    if (!extracted) {
      currentCity.outgoing.forEach(outgoingRoad => {
        if (distanceMap.get(outgoingRoad.to) > distanceMap.get(outgoingRoad.from) + outgoingRoad.distance) {
          distanceMap.set(outgoingRoad.to, distanceMap.get(outgoingRoad.from) + outgoingRoad.distance);
          parentMap.set(outgoingRoad.to, outgoingRoad.from);
          heuristic = timeMap.get(outgoingRoad.to) + distanceMap.get(outgoingRoad.to);
          heuristicHeap.insert(heuristic, outgoingRoad.to);
        }
      });
    }
  }

  // If it was never extracted from the minHeap, it means there is no path from src to dest
  if (!extracted) {
    return null;
  }

  let path = [dest];
  let currentCity = parentMap.get(dest);
  while (currentCity !== null) {
    path.push(currentCity);
    currentCity = parentMap.get(currentCity);
  }

  return path.reverse();
};


// Returns the same route found using Dijkstra's algorithm but using a 
// time-to-destination heuristic that is based on actual ttds.
let SJToMayaWest = aStar(PR, start, finish);
SJToMayaWest.forEach((city, i) => console.log(`${i}. ${city.name}`));
