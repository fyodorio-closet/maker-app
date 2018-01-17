import React, { Component } from 'react';
import axios from 'axios';
import TodoInput from './TodoInput';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import './TodoPage.css';

class TodoPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
		  data: []
		};
		this.apiUrl = '//5a5c2ef94611170012fe7564.mockapi.io/api/todos';
	}
	componentDidMount() {
		axios.get(this.apiUrl)
			.then((res) => {
				this.setState({data:res.data});
			});
	}
	handleRemove(id) {
		const filteredList = this.state.data.filter((todo) => {
			if(todo.id !== id) return todo;
		});
		axios.delete(this.apiUrl+'/'+id)
			.then((res) => {
				this.setState({data: filteredList});      
			})
	}
	handleAdd(item) {
		const todo = {name: item}
		axios.post(this.apiUrl, todo)
		.then((res) => {
		  this.state.data.push(res.data);
		  this.setState({data: this.state.data});
		});
	}
	render(){
		return (
			<div className="todo-page">
				<h1>Action List</h1>
				<TodoInput 	addTodo={this.handleAdd.bind(this)}/>
				<TodoList 	todos={this.state.data} 
							      remove={this.handleRemove.bind(this)}/>
			</div>
		);
	}
}

const TodoList = ({todos, remove}) => {
	return (<div className="list-group">{
				todos.map((todo) => {
					return (
						<List>
							<ListItem primaryText={todo.name} rightIconButton={<IconButton onClick={()=>remove(todo.id)}><i className="material-icons">delete</i></IconButton>} />
						</List>);
				})
			}</div>) 
}

export default TodoPage