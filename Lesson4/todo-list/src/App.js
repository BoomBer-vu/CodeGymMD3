import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        };
    }

    handleChange = (event) => {
        this.setState({ item: event.target.value });
    };

    handleAddItem = () => {
        if (this.state.item.trim() !== '') {
            this.setState(prevState => ({
                list: [...prevState.list, prevState.item],
                item: ''
            }));
        }
    };

    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={this.state.item}
                    onChange={this.handleChange}
                    placeholder="Nhập công việc cần làm..."
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;