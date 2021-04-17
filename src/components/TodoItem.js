import React, { Component } from "react";
import "./TodoItem.css";
import checkDone from "../img/check-done.svg";
import checkNone from "../img/check-none.svg";
import PropTypes from "prop-types";

class TodoItem extends Component {
	render() {
		const { item, onClick } = this.props;
		let ulr = checkNone;
		if (item.isComplete) {
			ulr = checkDone;
		}
		let className = "TodoItem";
		if (item.isComplete) {
			className += " TodoItem-done";
		}
		return (
			<div className={className}>
				<img onClick={onClick} src={ulr} width={30} alt="check icon" />
				<p>{item.title}</p>
			</div>
		);
	}
}
TodoItem.propTypes = {
	item: PropTypes.shape({
		isComplete: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired,
	}),
	onClick: PropTypes.func.isRequired,
};
export default TodoItem;
