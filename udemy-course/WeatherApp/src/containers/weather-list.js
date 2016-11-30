import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  // This should go to Weather list so this graph is more reusable


  renderWeatherRow(cityData){

    const tempData = cityData.list.map(d => (d.main['temp'] - 273.15));
    const pressureData = cityData.list.map(d => d.main['pressure']);
    const humidityData = cityData.list.map(d => d.main['humidity']);

    return (
      <tr key={cityData.city.id}>
        <td className="col-md-3">{cityData.city.name}</td>
        <td className="col-md-3"><Chart dataList={tempData}
                   unity='°C' opt={{color:'orange'}} /></td>
        <td className="col-md-3"><Chart dataList={pressureData}
                   unity='hPa' opt={{color:'green'}} /></td>
        <td className="col-md-3"><Chart dataList={humidityData}
                   unity='%' opt={{color:'gray'}} /></td>
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
