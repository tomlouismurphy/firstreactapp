import React, { Component } from 'react';
import NewFruit from './createForm.js';

class Fruits extends Component {

	render() {
		console.log(this.props)
		const listFruits = this.props.fruits.map((item, i) => {
			return <li key={i} onClick={this.props.crossOut}>{item}</li>
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