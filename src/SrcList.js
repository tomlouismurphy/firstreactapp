import React, { Component } from 'react';

class List extends Component {
	constructor(){
    super();
    this.state = {
      list: ['Trey', 'Page', 'Mike', 'Fish'],
    	}
  	}
    deleteItem = (event) => {
    	for (let i = 0; i < this.props.list.length; i++){
    		if (event.currentTarget.parentNode.innerHTML.indexOf(this.props.list[i]) !== -1){
    			this.props.list.splice(i, 1);
    			const state = this.props;
    			this.setState(state);
    		} else {
    			;
    		}
    	}
    }
	render() {

		const listItems = this.props.list.map((item, i) => {
			return <div key={i}><li key={i} onClick={this.props.crossOut}>{item}</li><button onClick={this.deleteItem}>Delete</button></div>
		})



		return (
			<div>
				<h2>Not Fruit</h2>
				<ul>
					{listItems}
				</ul>
			</div>
		)		
	}
}

export default List;