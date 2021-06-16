import React, {Component} from 'react';
import './App.css';
import BST from './BST';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  draw(ctx, x, y, node,w) {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.font="normal 20px Arial";
    ctx.textAlign="center"
    ctx.fillText(node.data.toString(),x,y+8)
    if(node.left){
      this.draw(ctx,x-w,y+100,node.left,w*0.6)
    }
    if(node.right){
      this.draw(ctx,x+w,y+100,node.right,w*0.6)
    }
  }
  componentDidMount() {
    const canvas = document.querySelector('#board');
    canvas.width=500;
    canvas.height=window.screen.height*0.8;
    const ctx = canvas.getContext('2d');
    var w = canvas.offsetWidth;
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
    this.draw(ctx, parseInt(w / 2), 30, tree.root,100);
    // console.log(tree);
    // tree.inOrder();
  }
  render() {
    return (
      <div className="App">
        <canvas id="board" />
      </div>
    );
  }
}
