import React from 'react';

import './index.scss';

class AddNew extends React.Component{
	constructor(props){
		super(props);
	}
	handleEnter(e){
		if(e.keyCode == 13){
		// 获取传入的todolist数据
        var currentlists = this.props.todo;
		var newRecord = e.target.value;
			// 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
		currentlists.push(newRecord);
	    this.props.onAdd(currentlists);
        e.target.value = "";
       }
	}
	handleClick(e){
		// 获取传入的todolist数据
        var currentlists = this.props.todo;
		var newRecord = this.refs.inputnew.value;
			// 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
		currentlists.push(newRecord);
	    this.props.onAdd(currentlists);
	    this.refs.inputnew.value = "";
	}
	render(){
		return(

			<div className="row add-container form-group">
				<input type="text" ref="inputnew" className="form-control no-hundred-width" placeholder="新增一条" onKeyUp={(e) =>{this.handleEnter(e)}}/>
				<button className="addbtn btn btn-default" onClick={(e) =>{this.handleClick(e)}}>添加</button>
			</div>
		);
	}
}

export default AddNew;