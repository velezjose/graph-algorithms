# Graph Algorithm Implementations

In this repo, you can find the implementation for: 
1. Graph –> adjacency list implementation
2. Priority Queues –> Binary Min Heap
3. Shortest Paths Algorithms –> See below
4. Topological Sorting Algorithms –> Queue and DFS-based implementations


## Graph
A CityGraph is used, where vertices are cities. Each city has outgoing and incoming edges, represented as roads. The roads have weights, which are the distances.


## Priority Queues

Directory contains a Binary Min Heap implementation, and a General Binary Min Heap implementation.  The difference between the two
is that the former only accepts values (numbers) to be added / extracted, and the latter accepts an object with a 
`{ key: Number, obj: Object }` and priority is kept on the `val`.


## Shortest Path Algorithms

| Algorithm     |  Time            | Space  |  Description                                                           |
| ------------- |:----------------:|:------:| ---------------------------------------------------------------------- |
| Bellman-Ford  |  O(VE)           |  O(V)  | For V vertices, it loops at most all of the edges |E| amount of times. |
| Dijkstra      | O((V + E) log(V))|  O(V)  | Binary Min Heap used, so no amortized O(1) extractMin() operation.     |
| A-star (A*)   | O((V + E) log(V))|  O(V)  | Worst case is Dijkstra's                                               |


Notes:

Dijkstra's other time complexities with priority queues: [More info](https://stackoverflow.com/questions/21065855/the-big-o-on-the-dijkstra-fibonacci-heap-solution)
- Unsorted array: O(V<sup>2</sup>)
- Binary heap: O((E + V) log(V))
- Fibonacci heap: O(E + V log(V))

For A*, the heuristic is the time that it takes to get from the city to the destination, which takes into account the region that is being traversed in the country.



## Topological Sorting Algorithms

Contains two implementations for a topological sort: 
1. Queue-based
2. DFS-based


## Conclusion
Enjoy!!