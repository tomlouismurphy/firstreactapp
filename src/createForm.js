import React, { Component } from 'react';

class CreateForm extends Component {
	constructor() {
		super();

		this.state = {
			inputValue: '',
			sumValue: ''
		}
	}
	handleOption = (e) => {
		const state = this.state;
		state.sumValue = e.currentTarget.value;
		this.setState(state);
		console.log(this.state);
	}
	handleInput = (e) => {
		const state = this.state;
		state.inputValue = e.currentTarget.value;
		this.setState(state);
		console.log(this.state);
	}
	handleForm = (e) => {
		const state = this.state;
		state[e.currentTarget.name] = e.currentTarget.value;
		this.setState(state);
		console.log(this.state);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const createdPieces = [];
		createdPieces.push(this.state.inputValue);
		createdPieces.push(this.state.sumValue);
		this.props.createItem(createdPieces);
		const state = this.state;
		state.inputValue = '';
	}
	render(){
		return (
			<form>
				<label>New Item</label>
					<select name="sumValue" onChange={this.handleForm}>
						<option value="null">Choose A Category</option>
						<option value="fruit">Fruit</option>
						<option value="not-fruit">Not Fruit</option>
					</select>
					<input name="inputValue" type="text" placeholder="new item" onChange={this.handleForm} value={this.state.inputValue}/>
				<button onClick={this.handleSubmit}>Create Item</button>
			</form>
		)
	}
}

export default CreateForm;