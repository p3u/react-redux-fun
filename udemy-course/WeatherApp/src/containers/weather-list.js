import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine  } from 'react-sparklines';


class WeatherList extends Component {

  renderChart(list, attr, opt={}) {
    opt = {
      color: opt.color || 'blue',
      limit: opt.limit || 40,
      width: opt.width || 180,
      height: opt.height || 120,
      margin: opt.margin || 5
    }


    let mapData = list.map((day) => {
      return day.main[attr];
    });

    return (
      <Sparklines data={mapData} limit={opt.limit}
                  width={opt.width} height={opt.height}
                  margin={opt.margin}>
        <SparklinesLine color={opt.color} />
      </Sparklines>
    );
  }

  renderWeatherRow(cityData){
    console.log('render', cityData);
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{this.renderChart(cityData.list, 'temp' )}</td>
        <td>{this.renderChart(cityData.list, 'humidity')}</td>
        <td>{this.renderChart(cityData.list, 'pressure')}</td>
      </tr>
    );
  }

  render(){
    console.log(this.props.weather);
    let city = this.props.weather.length > 0 ? this.props.weather[0].city.name : 'Waiting';
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{city}</th>
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
