const { PR, start: SJ, finish: MayaWest } = require('./PRGraph.js');
const { FakeCity, start: fakeStart, finish: fakeFinish } = require('./FakeCityGraph.js');

const BellmanFord = (graph, src, dest) => {
  let parentMap = new Map();
  let distanceMap = new Map();

  graph.cities.forEach(city => {
    parentMap.set(city, null);
    distanceMap.set(city, Infinity);
  });

  distanceMap.set(src, 0);

  graph.cities.forEach(city => {
    city.outgoing.forEach(outgoingRoad => {
      if (distanceMap.get(outgoingRoad.to) > distanceMap.get(outgoingRoad.from) + outgoingRoad.distance) {
        distanceMap.set(outgoingRoad.to, distanceMap.get(outgoingRoad.from) + outgoingRoad.distance);
        parentMap.set(outgoingRoad.to, outgoingRoad.from);
      }
    });
  });

  let path = [dest];
  let current = parentMap.get(dest);
  while (current !== null) {
    path.push(current);
    current = parentMap.get(current);
  }

  return path.reverse();
};


// // Shortest path from San Juan to MayaWest is the same as Dijkstra's output
// const SJToMaya = BellmanFord(PR, SJ, MayaWest);
// SJToMaya.forEach((city, i) => console.log(`${i}. ${city.name}`));

// Still works with FakeCity which has negative weighted edges.
const FakeStartToFakeFinish = BellmanFord(FakeCity, fakeStart, fakeFinish);
FakeStartToFakeFinish.forEach((city, i) => console.log(`${i}. ${city.name}`));
