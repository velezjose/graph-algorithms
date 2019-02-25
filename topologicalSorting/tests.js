let { dfsTopologicalSort } = require('./dfsTopologicalSort.js');
let { queueTopologicalSort } = require('./queueTopologicalSort.js');


console.log('DFS Topological Sort Tests:');

// Importing a FakeCityGraph
const { FakeCity: FakeCity1 } = require('../graphs/FakeCityGraph.js');

// Remove road to make the FakeCityGraph acyclic
FakeCity1.removeCity('F');

let fc1TopOrder = dfsTopologicalSort(FakeCity1); 
console.log(fc1TopOrder, 'is the topological sort of Fake City graph using DFS.');


// Importing Puerto Rico graph
const { PR: PR1 } = require('../graphs/PRGraph.js');
let PR1TopOrder = dfsTopologicalSort(PR1);
console.log(PR1TopOrder, 'is the topological sort of Puerto Rico graph using DFS.')


console.log('\n');

console.log('Queue Topological Sort Tests:');

// Importing a FakeCityGraph from 
const { FakeCity: FakeCity2 } = require('../graphs/FakeCityGraph.js');

// Remove road to make the FakeCityGraph acyclic
FakeCity2.removeCity('F');

let fc2TopOrder = queueTopologicalSort(FakeCity2); 
console.log(fc2TopOrder, 'is the topological sort of Fake City graph using two queues.');


// Importing Puerto Rico graph
const { PR: PR2 } = require('../graphs/PRGraph.js');
let PR2TopOrder = queueTopologicalSort(PR2);
console.log(PR2TopOrder, 'is the topological sort of Puerto Rico graph using two queues.')
