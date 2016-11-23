import React, {Component} from 'react';
import FormComponent from 'FormComponent';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  handleSearch(location) {
    var that = this;
    this.setState({ loading: true });

    openWeatherMap.getTemp(location)
      .then(function(passedData) {
        that.setState({
          location: location,
          temp: passedData,
          loading: false
        });
      }, function(passedError) {
        that.setState({loading: false});
        alert(passedError);
      });

  }

  render() {

    var that = this;

    function renderMessage() {
      if(that.state.loading === true) {
        return <h3>Loading...</h3>
      } else if(that.state.location && that.state.temp) {
        return (<WeatherMessage location={that.state.location} temp={that.state.temp}/>);
      }
    }

    return(
      <div>
        Weather Page
        <FormComponent passToParent={this.handleSearch.bind(this)}/>
        <p><strong>Note: this in Promises.</strong> The keyword "this" losses its context
        inside a promise. Because of that we need to use var that = this in the parent function.</p>
      <p><strong>Note: arrow functions take this from its parent.</strong> Normal functions don't; that's why
        we are forced to use bind or the var that=this trick. Using arrow functions we can save us
        that burden.</p>
        {renderMessage()}
      </div>
    );
  }

}

export default Weather;
