import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <article className="mainContent">
                {this.props.children}
            </article>
      </div>
    );
  }
}

export default App;
