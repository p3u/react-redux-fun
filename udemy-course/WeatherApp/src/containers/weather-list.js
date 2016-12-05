import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {

  renderWeatherRow(cityData){

    const tempData = cityData.list.map(d => (d.main['temp'] - 273.15));
    const pressureData = cityData.list.map(d => d.main['pressure']);
    const humidityData = cityData.list.map(d => d.main['humidity']);

    return (
      <tr key={cityData.city.id}>
        <td className="col-md-3">
          {cityData.city.name} 
        </td>
        <td className="col-md-3"><Chart dataList={tempData}
                   unit='°C' opt={{color:'orange'}} /></td>
        <td className="col-md-3"><Chart dataList={pressureData}
                   unit='hPa' opt={{color:'green'}} /></td>
        <td className="col-md-3"><Chart dataList={humidityData}
                   unit='%' opt={{color:'gray'}} /></td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            <th className="col-md-3">City</th>
            <th className="col-md-3">Temperature</th>
            <th className="col-md-3">Pressure</th>
            <th className="col-md-3">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(
            (cityData) => this.renderWeatherRow(cityData)
          )}
        </tbody>
      </table>
    );
  }
}

// ES6: instead of getting state and using state.weather I'm removing weather
// straight away
function mapStateToProps( { weather } ) {
  // ES6: same as return { weather: weather }
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
