# Graph Algorithm Implementations

In this repo, you can find the implementation for three shortest path algorithms: 
1. Bellman-Ford
2. Dijkstra
3. A*

A CityGraph is used, where vertices are cities. Each city has outgoing and incoming edges, represented as roads. The roads have weights, which are the distances.

For A*, the heuristic is the time that it takes to get from the city to the destination, which takes into account the region that is being traversed in the country.

Time complexities: 
1. Bellman-Ford -> O(V * E): For V - 1 vertices searched (discounting destination), it loops at most all of the edges |E| amount of times.
2. Dijkstra -----> O((V + E) log(V)): A Binary Min Heap is used, so there is no amortized O(1) extractMin() operation.
3. A* -----------> O((V + E) log(V)): Its worst case is Dijkstra's.
