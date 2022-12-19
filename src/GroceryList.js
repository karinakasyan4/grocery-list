import { Component } from "react";
import check from './check-mark.png';

export class GroceryList extends Component{
    state = {
        userImput: ' ',
        groceryList: []
    }
    onChangeEvent(e){
        this.setState({userImput: e});
    }
    addItem(input) {
        if (input === ''){
            alert('Please enter an item')
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userImput: ''})
        }
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
    }
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <form onSubmit={ this.onFormSubmit }>
                <div className="container">
                    <input type="text"
                    placeholder="What do you want to buy today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userImput}/>
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userImput)} className="btn add">Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={ this.crossedWord } key={ index }>
                            <img src={check} width='20px' alt="check-box"/>
                            { item }
                        </li>
                    ) )}
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
            </form>
        )
    }
}
