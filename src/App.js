import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false
    }
  }
  render() {
    return (
      <div className="App">
        <nav className='nav-bar'>
            <div className='title'>Start BootStrap</div>
            <div className='links-container'>
              <span>Menu</span>
            </div>
        </nav>
        <div className='body'>
          <div className='text-box'>
            <div className='welcome'>Welcome To Our Studio!</div>
            <div className='nice'>IT'S NICE TO MEET YOU</div>
            <div className='link'>Tell Me More</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
