import React, {Component} from 'react';
import './App.css';
import BST from './BST';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const ctx = document.querySelector('#board').getContext('2d');
    var tree = new BST();
    tree.insert(15);
    tree.insert(25);
    tree.insert(10);
    tree.insert(7);
    tree.insert(22);
    tree.insert(17);
    tree.insert(13);
    tree.insert(5);
    tree.insert(9);
    tree.insert(27);
    console.log(tree);
    tree.inOrder();
  }
  render() {
    return (
      <div className="App">
        <canvas id="board"></canvas>
      </div>
    );
  }
}
