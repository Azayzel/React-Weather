import React, {Component} from 'react';
import logo from './sun.gif';
import './App.css';
import './components/getZip'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GetZip from './components/getZip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="page-header">
            <img src={logo} className="img-responsive" alt="logo"/>
            <h1 className="App-title">React Weather App</h1>
          </header>
        </div>
        <p className="App-intro"></p>
        <GetZip/>
      </div>
    );
  }
}

export default App;
