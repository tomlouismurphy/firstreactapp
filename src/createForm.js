import React, { Component } from 'react';

class CreateForm extends Component {
	constructor() {
		super();

		this.state = {
			inputValue: ''
		}
	}
	handleInput = (e) => {
		const state = this.state;
		state.inputValue = e.currentTarget.value;
		this.setState(state);
		console.log(this.state);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createFruit(this.state.inputValue);
		const state = this.state;
		state.inputValue = '';
	}
	render(){
		return (
			<form>
				<label>New Fruit</label>
					<input type="text" placeholder="new fruit" onChange={this.handleInput} value={this.state.inputValue}/>
				<button onClick={this.handleSubmit}>Create Fruit</button>
			</form>
		)
	}
}

export default CreateForm;