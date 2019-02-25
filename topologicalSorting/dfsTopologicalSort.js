const { Queue } = require('./Queue.js');


// Topological sorting helper function takes in all of those parameters
let dfsTopSortHelper = (graph, currentCity, order, visited) => {
  // If currentCity is null, call dfsTopSortHelper on all cities that have 0 incoming roads
  if (currentCity === null) {
    graph.cities.forEach(city => {
      if (city.incoming.length === 0) dfsTopSortHelper(graph, city, order, visited);
    });
  }

  // If we haven't visited this city before, add it to the visited set, and recurse on 
  // dfsTopSortHelper to visit all of the cities that it has outgoing roads to.
  // After this has been completed, add it to the order array and return.
  if (!visited.has(currentCity) && currentCity !== null) {
    visited.add(currentCity);
    currentCity.outgoing.forEach(road => dfsTopSortHelper(graph, road.to, order, visited));
    order.push(currentCity);
    return;
  }

  // Return the final array in reverse.
  return order.map(city => city.name).reverse();
};


// Calls the dfs topological sort helper to return the order array
let dfsTopologicalSort = (graph) => dfsTopSortHelper(graph, null, [], new Set());

module.exports = {
  dfsTopologicalSort,
};
