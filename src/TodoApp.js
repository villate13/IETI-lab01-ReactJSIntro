import React, { Component } from 'react';
import { TodoList } from './TodoList';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

export class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{ text: "Learn React", priority: 5, dueDate: new Date() },
            { text: "Learn about APIs", priority: 4, dueDate: new Date(2020, 1, 23) },
            { text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }], text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <Navbar className="bg-dark justify-content-between">
                    <h3 className="text-white">TODO - PART III</h3>
                    
                </Navbar>

                <Card className="text-center">
                    <Card.Header>TodoList</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <TodoList items={this.state.items} />
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="new-todo">
                                What needs to be done?
                        </label>
                            <input
                                id="new-todo"
                                onChange={this.handleChange}
                                value={this.state.text}
                            />
                            <button>
                                Add #{this.state.items.length + 1}
                            </button>
                        </form>
                    </Card.Footer>
                </Card>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            dueDate: new Date()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}
