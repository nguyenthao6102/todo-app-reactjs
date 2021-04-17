import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

class App extends Component {
	constructor() {
		super();

		this.state = {
			newItem: "",
			todoItems: [
				{ title: "Mua bim bim", isComplete: true },
				{ title: "Đi đá bóng", isComplete: false },
				{ title: "Đi đổ xăng", isComplete: false },
			],
		};
		this.onItemClicked = this.onItemClicked.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEnterClick = this.handleEnterClick.bind(this);
		this.handleTickAllChange = this.handleTickAllChange.bind(this);
	}
	// Xử lý khi click vào item
	onItemClicked(item) {
		return (e) => {
			const isComplete = item.isComplete;
			const { todoItems } = this.state;
			const index = todoItems.indexOf(item);
			this.setState({
				todoItems: [
					...todoItems.slice(0, index),
					{
						...item,
						isComplete: !isComplete,
					},
					...todoItems.slice(index + 1),
				],
			});
		};
	}

	// Xử lý khi nhập vào input
	handleInputChange(newItem) {
		this.setState({
			newItem: newItem,
		});
	}
	// Xử lý khi nhấn enter
	handleEnterClick(e) {
		let text = e.target.value;

		if (e.keyCode === 13) {
			//Enter click
			if (!text) {
				return;
			}
			text = text.trim();
			if (!text) {
				return;
			}
			this.setState({
				newItem: "",
				todoItems: [
					{ title: text, isComplete: false },
					...this.state.todoItems,
				],
			});
		}
	}
	handleTickAllChange(e) {
		const todoItems = this.state.todoItems;
		todoItems.forEach((item) => {
			if (!item.isComplete) {
				item.isComplete = true;
			}
		});
		this.setState({
			todoItems: [...todoItems],
		});
	}
	render() {
		const { todoItems, newItem } = this.state;
		return (
			<div className="App">
				<Header
					newItem={newItem}
					onInputChange={this.handleInputChange}
					onEnterClick={this.handleEnterClick}
					onTickAll={this.handleTickAllChange}
				/>
				{todoItems.length > 0 &&
					todoItems.map((item, index) => (
						<TodoItem
							key={index}
							item={item}
							onClick={this.onItemClicked(item)}
						/>
					))}
				{todoItems.length === 0 && "Empty"}
			</div>
		);
	}
}

export default App;
