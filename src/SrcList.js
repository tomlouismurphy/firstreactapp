import React, { Component } from 'react';

class List extends Component {
	render() {

		const listItems = this.props.list.map((item, i) => {
			return <li key={i} onClick={this.props.crossOut}>{item}</li>
		})



		return (
			<ul>
				{listItems}
			</ul>
		)		
	}
}

export default List;