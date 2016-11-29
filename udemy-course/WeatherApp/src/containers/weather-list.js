import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeatherRow(cityData){


    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart dataList={cityData.list}
                   attr="temp" opt={{color:'orange'}} /></td>
        <td><Chart dataList={cityData.list}
                   attr="humidity" opt={{color:'green'}} /></td>
        <td><Chart dataList={cityData.list}
                   attr="pressure" opt={{color:'gray'}} /></td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
