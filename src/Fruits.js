import React, { Component } from 'react';
import NewFruit from './createForm.js';

class Fruits extends Component {
	constructor(){
    super();
    this.state = {
      fruits: ["pear", "apple", "strawberry", "yuzu"]
    	}
  	}
    deleteItem = (event) => {
    	for (let i = 0; i < this.props.fruits.length; i++){
    		if (event.currentTarget.parentNode.innerHTML.indexOf(this.props.fruits[i]) !== -1){
    			this.props.fruits.splice(i, 1);
    			const state = this.props;
    			this.setState(state);
    		} else {
    			;
    		}
    	}
    }
	render() {
		console.log(this.props)
		const listFruits = this.props.fruits.map((item, i) => {
			return <div key={i} listid={i}><li key={i} onClick={this.props.crossOut}>{item}</li><button onClick={this.deleteItem}>Delete</button></div>
		})
		return (
			<div>
				<h2>Fruit</h2>
				<ul>
					{listFruits}
				</ul>
				<NewFruit createItem={this.props.createItem}/>
			</div>
		)
	}
}

export default Fruits;