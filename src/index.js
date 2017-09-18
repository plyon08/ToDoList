import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(event) {
    const addItemArray = this.state.items;
    addItemArray.push({text: this._inputElement.value,key: Date.now()});
    this.setState({items: addItemArray});
    this._inputElement.value = '';
    event.preventDefault();
  }

  deleteItem(event) {
    let deleteItemArray = this.state.items;
    const target = event.target.id;
    deleteItemArray.splice(target,1);
    this.setState({items: deleteItemArray});
  }

  render() {
    const todoEntries = this.state.items;
    const listItems = todoEntries.map((item,index) => <li key={item.key} id={index} onClick={this.deleteItem}>{item.text}</li>);
  
    return (
      <div className="todoListMain">
        <h1>To Do List</h1>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                   placeholder="Enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <ul className="theList">{listItems}</ul>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);

