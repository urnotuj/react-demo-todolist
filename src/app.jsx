import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from 'component/todo-list/index.jsx';
import AddNew from 'component/add-new/index.jsx';


class APP extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todolists: ["1111"]
		}

	}
	handleChange(rows){
		this.setState({
			todolists:rows
		});
	}
	render(){
		return(
			<div className="container">
				<h2>To Do List</h2>
				<div className="forBorder">
			   <TodoList todo={this.state.todolists} onDel={this.handleChange.bind(this)}/>
			   <AddNew todo={this.state.todolists} onAdd={(rows) => {this.handleChange(rows)}} />
			   </div>
			</div>
		);
	}
}

ReactDOM.render(<APP />,document.getElementById('app'));