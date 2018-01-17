import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TodoInput extends Component {
  constructor(props) {
		super(props);
		this.state = {
		  inputText: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(event) {
        this.setState({inputText: event.target.value});
    }
    handleSubmit(data, event) {
        event.preventDefault();
        this.props.addTodo(data);
        this.setState({inputText: ''});
    }
	render(){
		return (
			<div>
                <TextField  hintText="Enter todo"
                            value={this.state.inputText}
                            onChange={this.handleInput}/>
                <RaisedButton label="Add" primary={true} onClick={(e)=>this.handleSubmit(this.state.inputText, e)}/>
			</div>
		);
	}
}

export default TodoInput