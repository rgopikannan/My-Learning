import React, {Component} from 'react';
import { addTodo } from '../actions'
import { connect } from 'react-redux';



class AddTodo extends Component {
    constructor(){
        super();
        this.setTextInput = (element) =>{
            this.inputTxt = element;
        }
    }

    onAddTodo = (dispatch) => {
        console.log(this.inputTxt.value);
        store.dispatch(addTodo(this.inputTxt.value));
    }    

    render(){   

        return(
            <div>
                <input type="text" ref={this.setTextInput}/>
               <button onClick={this.onAddTodo}>Add Todo</button>                
            </div>
        );
    }
}

export default connect()(AddTodo);