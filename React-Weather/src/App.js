import React, {Component} from 'react';
//import logo from './sun.gif';
import './App.css';
import './components/getCityState'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GetWeatherAuto from './components/getWeatherAuto'
import GetCityState from './components/getCityState';
import GetForecast from './components/getForecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Weather: null
    };
  }
  myCallback = (dataFromChild) => {
    console.log("Got data from child.." + dataFromChild)
    this.setState({Weather: dataFromChild})
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro"></p>
        <div className="row main">
          <div className="col-md-3 col-lg-3 dark">
            <header className="page-header">
              <svg
                className="svg-sun"
                version="1.1"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMinYMin meet">
                <circle cx="50" cy="50" r="35" id="sun"></circle>
              </svg>

            </header>
            <h1 className="sun-color">React Weather App</h1>
            <hr/>
            <div className="container">
              <GetCityState/>
              <div className="left-footer">
                <p className="p-text">
                  Created by Josh Lavely to demonstrate React
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-9 light">
            <h2 className="f-title">
              Your Weather Now
            </h2>
            <GetWeatherAuto callBackFromParent={this.myCallback}/>
            <div className="row">
              <h2 className="f-title">
                10-Day Forecast
              </h2>
              {this.state.Weather !== null
                ? <GetForecast Weather={this.state.Weather}/>
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;