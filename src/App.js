import React, {Component} from 'react';
import './App.css';
import BST from './BST';
import Canvas from './Canvas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {input: [15, 25, 10, 7, 22, 17, 13, 5, 9, 27]};
    // [15,25,10,7,22,17,13,5,9,27]
  }
  handleAdd() {
    const data = document.querySelector('#add').value;
    console.log(data);
    const input = this.state.input;
    input.push(data);
    this.setState({input});
  }
  render() {
    return (
      <div className="App">
        <div id="controls">
          <div>
            <input id="add" type="number"></input>
            <button onClick={(e) => this.handleAdd()}>add</button>
          </div>
          <div>
            <button onClick={(e) => this.setState({input:[]})}>reset</button>
          </div>
        </div>

        <Canvas input={this.state.input} />
      </div>
    );
  }
}
