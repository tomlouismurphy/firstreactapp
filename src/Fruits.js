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
				<ul>
					{listFruits}
				</ul>
				<NewFruit createFruit={this.props.createFruit}/>
			</div>
		)
	}
}

export default Fruits;