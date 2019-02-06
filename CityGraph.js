const { Road } = require('./Road.js');
const { City } = require('./City.js');

// Class CityGraph will be used to represent any network of cities. 
// I will use it to represent several of Puerto Rico's cities
// and perform Dijkstra's algorithm to find the shortest path.
module.exports = {
  CityGraph: class CityGraph {
    // Constructor takes no input. Initializes a new adjacency list Map.
    constructor() {
      this.cities = [];
      this.roads = [];
    }

    // Adds a city to our graph and returns it. If city already in CityGraph 
    // instance, don't create any new city and just return the city.
    addCity(cityName) {
      let existingCity = this.find(cityName);

      if (existingCity !== undefined) {
        return existingCity;
      }

      let newCity = new City(cityName);
      this.cities.push(newCity);
      return newCity;
    }

    // Adds a road between two cities and returns it. If a road already exists 
    // between cities, do not create and just return it. If one (both) of the 
    // does (do) not exist in our CityGraph instance, create it (them) and the road after.
    addRoad(fromName, toName, distance) {
      if (!this.has(fromName)) {
        this.addCity(fromName);
      }

      if (!this.has(toName)) {
        this.addCity(toName);
      }

      let fromCity = this.find(fromName);
      let toCity = this.find(toName);
      let road = new Road(fromCity, toCity, distance);
      this.roads.push(road);
      fromCity.outgoing.push(road);
      toCity.incoming.push(road);
      return road;
    }

    // Removes a city from the CityGraph instance, regardless of whether it had
    // or had not any incoming or outgoing roads. It takes care of this by 
    // removing these roads before splicing it from the cities array.
    removeCity(cityName) {
      if (!this.has(cityName)) {
        return;
      }

      let cityObj = this.find(cityName);

      cityObj.outgoing.forEach(road => this.removeRoad(cityName, road.to.name));
      cityObj.incoming.forEach(road => this.removeRoad(road.from.name, cityName));

      this.cities.splice(this.cities.indexOf(cityObj), 1);
    }

    // Removes a road from one city to another. 
    // I.e., it splices the road in the from's outgoing roads, and the to's 
    // incoming roads.
    removeRoad(fromName, toName) {
      let fromCity = this.find(fromName);
      let toCity = this.find(toName);
      let road = fromCity.outgoing.filter(road => road.from === fromCity && road.to === toCity)[0];
      this.roads.splice(this.roads.indexOf(road), 1);
      return road;
    }

    // Returns a boolean: whether the city exists in our CityGraph instance.
    has(cityName) {
      return this.cities.filter(cityObj => cityObj.name === cityName).length === 1;
    }

    // Returns the city object if it exists; undefined otherwise.
    find(cityName) {
      return this.cities.filter(cityObj => cityObj.name === cityName)[0];
    }

  },
};
