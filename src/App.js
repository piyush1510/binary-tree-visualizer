import React, {Component} from 'react';
import './App.css';
import BST from './BST';
import Canvas from './Canvas'

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Canvas input={[15,25,10,7,22,17,13,5,9,27,14]}/>
      </div>
    );
  }
}
