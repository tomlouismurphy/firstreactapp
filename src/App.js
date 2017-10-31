import React, { Component } from 'react';
import './logo.svg';
import './App.css';
import List from './SrcList.js';
import Fruits from './Fruits.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: ['Trey', 'Page', 'Mike', 'Fish'],
      fruits: ["pear", "apple", "strawberry", "yuzu"]
    }
  }
  itemComplete = (event) => {
    console.log(event.currentTarget);
    event.currentTarget.classList.toggle('item-strike');
  }
  createFruit = (fruit) => {
    const state = this.state;
    state.fruits.push(fruit);
    this.setState(state);
  }
  render() {
    return (

      <div>
        <h1>Hi, I am React</h1>
        <List crossOut={this.itemComplete} list={this.state.list}/>
        <Fruits crossOut={this.itemComplete} fruits={this.state.fruits} createFruit={this.createFruit}/>
      </div>
    );
  }
}

export default App;
