// City class
module.exports = {
  City: class City {
    constructor(cityName) {
      this.name = cityName;
      this.outgoing = [];
      this.incoming = [];
    }
  },
};
