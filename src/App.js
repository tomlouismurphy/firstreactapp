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
  createItem = (item) => {
    console.log(item);
    const state = this.state;
    if (item[1] === 'fruit'){
      state.fruits.push(item[0]);
    } else if (item[1] === 'not-fruit') {
      state.list.push(item[0]);
    } else {
      ;
    }
    this.setState(state);
  }
  render() {
    return (

      <div>
        <h1>Hi, I am React</h1>
        <List crossOut={this.itemComplete} list={this.state.list} createItem={this.createItem}/>
        <Fruits crossOut={this.itemComplete} fruits={this.state.fruits} createItem={this.createItem}/>
      </div>
    );
  }
}

export default App;
