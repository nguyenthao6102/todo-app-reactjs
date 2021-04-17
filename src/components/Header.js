import React, { Component } from "react";
import "./Header.css";
import tick from "../img/tick.svg";
import PropTypes from "prop-types";
export default class Header extends Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.handleTickAll = this.handleTickAll.bind(this);
	}
	handleInput(e) {
		this.props.onInputChange(e.target.value);
	}
	handleEnter(e) {
		this.props.onEnterClick(e);
	}
	handleTickAll(e) {
		this.props.onTickAll(e);
	}
	render() {
		return (
			<div className="Header">
				<img
					src={tick}
					width={25}
					alt="tick all"
					onClick={this.handleTickAll}
				/>
				<input
					type="text"
					placeholder="Nhập công việc cần thêm"
					onChange={this.handleInput}
					onKeyUp={this.handleEnter}
				/>
			</div>
		);
	}
}
Header.propTypes = {
	onInputChange: PropTypes.func.isRequired,
	onEnterClick: PropTypes.func.isRequired,
	onTickAll: PropTypes.func.isRequired,
};
