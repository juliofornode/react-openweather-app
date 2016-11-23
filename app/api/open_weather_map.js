import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?appid=b68279dd9e3ec9121ef0576990607535&units=metric';

const APIkey = 'b68279dd9e3ec9121ef0576990607535';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var finalURL = `${baseURL}&q=${encodedLocation}`;

    return axios.get(finalURL).then(function(passedData) {
      //validation
      if(passedData.data.cod && passedData.data.message) {
        throw new Error(passedData.data.message);
      } else {
        return passedData.data.main.temp;
      }
    }, function(passedError) {
      throw new Error(passedError.data.message);
    });


  }
}
