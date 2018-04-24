import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}
    handleDel(e){
        var delIndex = e.target.getAttribute('data-key');
        // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
        this.props.todo.splice(delIndex, 1);
        this.props.onDel(this.props.todo);
    }
	render(){
		return(
                <ul className="list-todo list-unstyled">
                {
                   // this.props.todo.map( (item,index) => {<li key={index}>{item}</li>})
                    this.props.todo.map(function(name,index) {
                        return(
                            <li key={index}>
                                {name}
                                <a className="btn btn-default delbtn" href="#" onClick={this.handleDel.bind(this)} data-key={index} role="button">删除</a>
                                {/*<button className="delbtn btn btn-default" onClick={this.handleDel.bind(this)} data-key={index}>删除</button>*/}
                            </li>
                        )
                    }.bind(this))
                }
                </ul>
		);
	}
}

export default TodoList;