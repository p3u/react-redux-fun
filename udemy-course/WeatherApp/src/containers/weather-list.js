import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  // constructor() {
  //
  // }

  render(){
    console.log(this.props.weather);
    let city = this.props.weather.length > 0 ? this.props.weather[0].city.name : 'Waiting';
    return (
      <table>
        <thead>
          <tr>
            <th>{city}</th>
          </tr>
        </thead>
        <tbody>
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
