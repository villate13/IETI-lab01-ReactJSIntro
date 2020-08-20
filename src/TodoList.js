 
import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component  {
    render() {
        console.log(this.props.items);
        const todos = this.props.items;
        const tlist = todos.map((item)=>
            {
                return <Todo text={item.text} priority={item.priority} dueDate={item.dueDate} />;
            }
        );
        return <ul>{tlist}</ul>
    }
}