import React, { Component } from 'react'
import BST from './BST';

export default class Canvas extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    draw(ctx, x, y, node, w) {
        ctx.beginPath();
        ctx.strokeStyle = '#fff';
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.font = 'normal 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(node.data.toString(), x, y + 8);
        if (node.left) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - w, y + 100);
          ctx.stroke();
          this.draw(ctx, x - w, y + 100, node.left, w * 0.5);
        }
        if (node.right) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + w, y + 100);
          ctx.stroke();
          this.draw(ctx, x + w, y + 100, node.right, w * 0.5);
        }
      }
      componentDidMount() {
        const canvas = document.querySelector('#board');
        canvas.width = window.screen.width * 0.8;
        canvas.height = window.screen.height * 0.8;
        const ctx = canvas.getContext('2d');
        var w = canvas.offsetWidth;
        var tree = new BST();
        this.props.input.map(i=>tree.insert(i))
        
        if(tree.root)
        this.draw(ctx, parseInt(w / 2), 30, tree.root, w*0.2);
        // console.log(tree);
        // tree.inOrder();
      }
    render() {
        return (
            <div>
                <canvas id="board" />
            </div>
        )
    }
}
