import React, {Component} from 'react';

class WeatherMessage extends Component {
  render() {
    return(
        <div>
          <p>Weather message.</p>
          <p>Location: {this.props.location}, Temp: {this.props.temp}</p>
        </div>
    );
  }

}

export default WeatherMessage;
